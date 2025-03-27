// src/components/home/SolutionSection.js
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0;
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

const SolutionSection = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Detect when the section is in view to activate animations
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('solution');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <SectionContainer id="solution">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Our Solution</Heading>
        <Description>
          Καιρός bridges the gap between traditional journaling and AI-powered insights, creating a seamless experience that honors both worlds.
        </Description>
        
        <Grid>
          <Card>
            <CardImage 
              src="/static/images/product/writing_experience.jpg" 
              alt="Physical Journaling" 
            />
            <CardTitle>Physical Connection</CardTitle>
            <CardDescription>
              Premium journals with embedded NFC technology to preserve the therapeutic value of handwriting.
            </CardDescription>
          </Card>
          
          <Card>
            <CardImage 
              src="/static/images/product/nfc_scanning.jpg" 
              alt="NFC Scanning"
            />
            <CardTitle>AI Understanding</CardTitle>
            <CardDescription>
              Advanced analysis that identifies emotional patterns and personal growth opportunities.
            </CardDescription>
          </Card>
          
          <Card>
            <CardImage 
              src="/static/diagrams/user-flow-diagram-complete.svg" 
              alt="Guided Journeys"
              style={{ objectFit: 'contain', background: 'rgba(255,255,255,0.1)' }} 
            />
            <CardTitle>Guided Journeys</CardTitle>
            <CardDescription>
              Structured paths of various durations to build consistent habits and meaningful insights.
            </CardDescription>
          </Card>
        </Grid>

        <ActionButtons>
          <PrimaryButton to="/#product">See How It Works</PrimaryButton>
          <SecondaryButton to="/nda">
            <FaLock /> Get Detailed Specs
          </SecondaryButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SolutionSection;