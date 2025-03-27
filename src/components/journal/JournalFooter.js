// src/components/journal/JournalFooter.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.2s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.brand},
      ${({ theme }) => theme.colors.accent},
      transparent
    );
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 15px;
  letter-spacing: 2px;
  
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
  display: inline-block;
`;

const FooterTagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 15px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 8px;
  font-size: 0.85rem;
`;

const ConfidentialNote = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.85rem;
  letter-spacing: 0.5px;
`;

const JournalFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterLogo>Καιρός</FooterLogo>
      <FooterTagline>Smart Journal for Mindful Growth</FooterTagline>
      <Copyright>&copy; {currentYear} Καιρός. All rights reserved.</Copyright>
      <ConfidentialNote>This document contains confidential information and is protected under NDA.</ConfidentialNote>
    </FooterContainer>
  );
};

export default JournalFooter;