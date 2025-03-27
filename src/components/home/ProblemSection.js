// src/components/home/ProblemSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.accentDark};
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ProblemSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 80, symbol: '%', label: 'Journals abandoned within months' },
    { id: 2, value: 0, target: 7, symbol: 'hrs', label: 'Daily screen time for adults 25-40' },
    { id: 3, value: 0, target: 70, symbol: '%', label: 'Privacy concerns with digital apps' },
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

    const section = document.getElementById('problem');
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
    <SectionContainer id="problem">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>The Personal Growth Challenge</Heading>
        <Description>
          In our increasingly digital world, people are struggling to maintain consistent journaling practices while also managing screen fatigue.
        </Description>
        
        <CounterContainer>
          {counters.map((counter) => (
            <CounterItem key={counter.id}>
              <Counter symbol={counter.symbol}>{counter.value}</Counter>
              <CounterLabel dangerouslySetInnerHTML={{ __html: counter.label.replace(/\n/g, '<br/>') }} />
            </CounterItem>
          ))}
        </CounterContainer>
        
        <Description>
          Despite these challenges, interest in personal development and mindfulness continues to grow, creating a need for solutions that bridge physical and digital experiences.
        </Description>

        <ActionButtonsContainer>
          <ActionButton to="/#solution">See Our Solution</ActionButton>
        </ActionButtonsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ProblemSection;