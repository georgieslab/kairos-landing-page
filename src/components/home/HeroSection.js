// src/components/home/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaLock, FaMugHot } from 'react-icons/fa';

const HeroContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.brandDark} 0%, ${({ theme }) => theme.colors.brand} 100%);
  text-align: center;
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
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.accentLight};
  animation: fadeIn 0.8s ease forwards;
`;

const Tagline = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
`;

const Heading = styled.h1`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto 1.5rem;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;

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

const OutlineButton = styled(ActionButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: rgba(230, 184, 156, 0.1);
  }
`;

const ExternalLink = styled.a`
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

const KofiButton = styled(ExternalLink)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: rgba(230, 184, 156, 0.1);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <BackgroundPattern />
      <ContentWrapper>
        <Logo>Καιρός</Logo>
        <Tagline>Ancient Wisdom Meets AI</Tagline>
        <Heading>Bridging traditional journaling with AI-powered insights</Heading>
        <Description>
          Transform your handwritten reflections into personalized growth opportunities
        </Description>
        
        <ActionButtons>
          <PrimaryButton to="/#problem">
            <FaArrowDown /> Learn More
          </PrimaryButton>
          <SecondaryButton to="/nda">
            <FaLock /> Get Confidential Info
          </SecondaryButton>
          <KofiButton href="https://ko-fi.com/kairosjournal" target="_blank">
            <FaMugHot /> Support Our Work
          </KofiButton>
        </ActionButtons>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;