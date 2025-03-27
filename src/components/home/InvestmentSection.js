// src/components/home/InvestmentSection.js
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
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
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

const InvestmentSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 60, symbol: 'K', label: 'Seed funding<br>target (€)' },
    { id: 2, value: 0, target: 9, symbol: '', label: 'Month path<br>to break-even' },
    { id: 3, value: 0, target: 3, symbol: 'x', label: 'Healthy LTV:CAC<br>ratio' },
  ]);

  useEffect(() => {
    // Detect when the section is in view to activate animations
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
          startCounterAnimation();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('investment');
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

  return (
    <SectionContainer id="investment">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Investment Opportunity</Heading>
        <Description>
          We're seeking seed funding to bring Καιρός to market and scale our unique physical-digital bridge technology.
        </Description>
        
        <ChartContainer>
          <ChartImage 
            src="/static/charts/funding-roadmap-chart.svg" 
            alt="Funding Roadmap" 
          />
        </ChartContainer>
        
        <CounterContainer>
          {counters.map((counter) => (
            <CounterItem key={counter.id}>
              <Counter symbol={counter.symbol}>{counter.value}</Counter>
              <CounterLabel dangerouslySetInnerHTML={{ __html: counter.label }} />
            </CounterItem>
          ))}
        </CounterContainer>
        
        <ChartContainer>
          <ChartImage 
            src="/static/charts/use-of-funds-pie-chart-final.png" 
            alt="Use of Funds" 
            maxHeight="250px"
          />
        </ChartContainer>
        
        <Description>
          Learn more about our detailed financial projections, product roadmap, and growth strategy by scheduling a call with us.
        </Description>
        
        <Description>
          After our conversation, we're happy to share our Confidential Information Package under NDA.
        </Description>

        <ActionButtons>
          <PrimaryButton to="/nda">
            <FaLock /> Sign NDA & Get Details
          </PrimaryButton>
          <SecondaryButton to="/#contact">Schedule a Call</SecondaryButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default InvestmentSection;