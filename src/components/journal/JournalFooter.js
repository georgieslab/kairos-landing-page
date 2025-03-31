// src/components/journal/JournalFooter.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTwitter, FaLinkedin, FaMugHot, FaGithub } from 'react-icons/fa';

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
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 25px 0;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #121212;
    transform: translateY(-3px);
  }
`;

const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.accent}
  );
  color: white;
  border-radius: 30px;
  font-size: 0.9rem;
  margin-top: 15px;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(230, 184, 156, 0.3);
  }
`;

const JournalFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterLogo>Καιρός</FooterLogo>
      <FooterTagline>Smart Journal for Mindful Growth</FooterTagline>
      <ConfidentialNote>This document contains confidential information and is protected under NDA.</ConfidentialNote>
      
      <SocialLinks>
        <SocialIcon 
          href="https://twitter.com/kairosaijournal" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="X (Twitter)"
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon 
          href="https://linkedin.com/company/kairosaijournal" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon 
          href="https://github.com/GeorgiesLab/kairos-landing-page" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIcon>
      </SocialLinks>
      
      <SupportButton 
        href="https://ko-fi.com/kairosaijournal" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaMugHot /> Support on Ko-Fi
      </SupportButton>
      
      <Copyright>&copy; {currentYear} Καιρός. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default JournalFooter;