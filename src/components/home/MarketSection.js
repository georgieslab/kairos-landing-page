// src/components/home/MarketSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const SectionContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(85, 139, 110, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(230, 184, 156, 0.1) 0%, transparent 50%);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  position: relative;
  z-index: 2;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transform: translateY(${({ isActive }) => (isActive ? '0' : '20px')});
  transition: opacity 0.8s ease, transform 0.8s ease;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.accentLight};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  max-width: 800px;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem 0;
`;

const CounterItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Counter = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
  position: relative;

  &::after {
    content: "${({ symbol }) => symbol}";
    font-size: 2rem;
    position: absolute;
    margin-left: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;

    &::after {
      font-size: 1.5rem;
    }
  }
`;

const CounterLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ChartContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
`;

const ChartImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const SubHeading = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin: 2rem 0 1rem;
`;

const BarChartContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin: 2rem 0;
`;

const BarChart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const Bar = styled.div`
  width: 15%;
  background: ${({ theme }) => theme.colors.brand};
  border-radius: 5px 5px 0 0;
  position: relative;
  transition: height 1.5s ease-out;
  height: ${({ isActive, height }) => (isActive ? height : '0')};
`;

const BarLabel = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  white-space: nowrap;
`;

const BarValue = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PrimaryButton = styled(ActionButton)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: ${({ theme }) => theme.colors.brand};
  color: white;

  &:hover {
    background: ${({ theme }) => theme.colors.brandDark};
  }
`;

const MarketSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [chartActive, setChartActive] = useState(false);
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 150, symbol: 'B', label: 'Global stationery<br>market (€)' },
    { id: 2, value: 0, target: 15, symbol: 'B', label: 'Wellness app<br>market (€)' },
    { id: 3, value: 0, target: 25, symbol: '%', label: 'Annual growth in<br>mindfulness products' },
  ]);

  useEffect(() => {
    // Detect when the section is in view to activate animations
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
          startCounterAnimation();
          
          // Activate chart after a delay
          setTimeout(() => {
            setChartActive(true);
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('market');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const startCounterAnimation = () => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        clearInterval(timer);
        
        // Set final values
        setCounters(counters.map(counter => ({
          ...counter,
          value: counter.target
        })));
      } else {
        // Update values based on progress
        setCounters(counters.map(counter => ({
          ...counter,
          value: Math.floor((counter.target / steps) * currentStep)
        })));
      }
    }, interval);
  };

  const barData = [
    { id: 1, height: '40%', value: '40%', label: 'Traditional Journals' },
    { id: 2, height: '65%', value: '65%', label: 'Digital Apps' },
    { id: 3, height: '85%', value: '85%', label: 'Hybrid Solutions' },
    { id: 4, height: '95%', value: '95%', label: 'Καιρός Approach' },
  ];

  return (
    <SectionContainer id="market">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Market Opportunity</Heading>
        <Description>
          Καιρός sits at the intersection of two growing markets:
        </Description>
        
        <CounterContainer>
          {counters.map((counter) => (
            <CounterItem key={counter.id}>
              <Counter symbol={counter.symbol}>{counter.value}</Counter>
              <CounterLabel dangerouslySetInnerHTML={{ __html: counter.label }} />
            </CounterItem>
          ))}
        </CounterContainer>
        
        <SubHeading>Revenue Breakdown</SubHeading>
        <ChartContainer>
          <ChartImage 
            src="/static/charts/revenue-mix-pie-chart.png" 
            alt="Revenue Mix" 
          />
        </ChartContainer>
        
        <SubHeading>Market Readiness</SubHeading>
        <ChartContainer>
          <BarChartContainer>
            <BarChart>
              {barData.map((bar) => (
                <Bar key={bar.id} height={bar.height} isActive={chartActive}>
                  <BarValue>{bar.value}</BarValue>
                  <BarLabel>{bar.label}</BarLabel>
                </Bar>
              ))}
            </BarChart>
          </BarChartContainer>
        </ChartContainer>
        
        <Description>
          User testing shows overwhelming interest in solutions that bridge physical and digital experiences.
        </Description>

        <ActionButtons>
          <PrimaryButton to="/#traction">Our Traction</PrimaryButton>
          <SecondaryButton to="/nda">
            <FaLock /> See Financial Projections
          </SecondaryButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MarketSection;