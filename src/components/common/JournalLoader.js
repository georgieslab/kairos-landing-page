// src/components/common/JournalLoader.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  background-image: radial-gradient(
    circle at 10% 20%, 
    rgba(43, 70, 60, 0.3) 0%,
    rgba(30, 30, 30, 0.5) 50%,
    rgba(13, 13, 13, 0.7) 100%
  );
  z-index: 9999;
  opacity: ${({ isLoading }) => (isLoading ? '1' : '0')};
  visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2px;
  animation: ${fadeIn} 1s forwards;
  
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
  animation: ${shimmer} 6s linear infinite;
`;

const LogoImage = styled.img`
  height: 80px;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 20px rgba(85, 139, 110, 0.4));
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(16, 176, 104, 0.1);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.brand};
  animation: ${rotate} 1s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.accentLight};
  font-size: 1rem;
  letter-spacing: 2px;
  animation: ${fadeIn} 1s forwards;
`;

const JournalLoader = ({ isLoading }) => {
  return (
    <LoaderContainer isLoading={isLoading}>
      <LogoContainer>
        <LogoImage src={`${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`} alt="Καιρός" />
        <Logo>Καιρός</Logo>
      </LogoContainer>
      <Spinner />
      <LoadingText>Loading confidential information...</LoadingText>
    </LoaderContainer>
  );
};

export default JournalLoader;