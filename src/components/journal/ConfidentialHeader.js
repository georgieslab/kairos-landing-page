// src/components/journal/ConfidentialHeader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInSlow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(230, 184, 156, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(230, 184, 156, 0); }
  100% { box-shadow: 0 0 0 0 rgba(230, 184, 156, 0); }
`;

const CoverPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1F2E28 0%, #0A1612 100%);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  padding: 50px 20px;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  overflow: hidden;

  &::before {
    content: "CONFIDENTIAL";
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 8px 15px;
    border: 1px solid rgba(230, 184, 156, 0.3);
    background-color: rgba(10, 22, 18, 0.7);
    border-radius: 4px;
    opacity: 0;
    animation: ${fadeInSlow} 1s forwards, ${pulseAnimation} 2s infinite;
    animation-delay: 2s, 3s;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(85, 139, 110, 0.05) 0%, transparent 70%),
                radial-gradient(circle at 70% 70%, rgba(230, 184, 156, 0.05) 0%, transparent 70%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${popIn} 0.8s forwards, ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: 0.2s, 1s;
  
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.brandLight}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const LogoImage = styled.img`
  height: 80px;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${popIn} 0.8s forwards;
  animation-delay: 0.1s;
  filter: drop-shadow(0 0 20px rgba(85, 139, 110, 0.4));
`;

const Tagline = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 40px;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.5s;
  color: ${({ theme }) => theme.colors.accentLight};
  letter-spacing: 1px;
`;

const CoverTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 30px;
  max-width: 800px;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.8s;
  
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentLight},
    ${({ theme }) => theme.colors.accent}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.8s forwards, ${shimmer} 6s linear infinite;
  animation-delay: 0.8s, 2s;
  
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.brand},
      ${({ theme }) => theme.colors.accent}
    );
  }
`;

const CoverDescription = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 1.1s;
  line-height: 1.7;
  color: #d0d0d0;
`;

const CoverDate = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 0.9rem;
  opacity: 0;
  animation: ${fadeInSlow} 1s forwards;
  animation-delay: 1.5s;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 1px;
`;

const ConfidentialHeader = () => {
  return (
    <CoverPage>
      <ContentWrapper>
        <LogoImage src="/static/icons/kairos-logo.svg" alt="Καιρός" />
        <Logo>Καιρός</Logo>
        <Tagline>Smart Journal for Mindful Growth</Tagline>
        <CoverTitle>Confidential Information Package</CoverTitle>
        <CoverDescription>
          Bridging analog journaling with AI-powered insights to transform personal reflection into structured growth.
        </CoverDescription>
      </ContentWrapper>
      <CoverDate>March 14, 2025</CoverDate>
    </CoverPage>
  );
};

export default ConfidentialHeader;