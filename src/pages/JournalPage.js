// src/pages/JournalPage.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ConfidentialHeader from '../components/journal/ConfidentialHeader';
import TableOfContents from '../components/journal/TableOfContents';
import JournalSection from '../components/journal/JournalSection';
import JournalFooter from '../components/journal/JournalFooter';
import { journalSections } from '../data/journalContent';

// Animations
const gradientBorderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #121212; /* Much darker background */
  background-image: radial-gradient(
    circle at 10% 20%, 
    rgba(43, 70, 60, 0.3) 0%,
    rgba(30, 30, 30, 0.5) 50%,
    rgba(13, 13, 13, 0.7) 100%
  );
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 30s ease infinite;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px;
`;

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ConfidentialWatermark = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 12vw;
  color: rgba(255, 255, 255, 0.02);
  pointer-events: none;
  z-index: 1;
  font-weight: 700;
  white-space: nowrap;
`;

const GradientBorder = styled.div`
  position: relative;
  border-radius: 15px;
  margin-bottom: 60px;
  
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    border-radius: 18px;
    background: linear-gradient(
      45deg, 
      ${({ theme }) => theme.colors.brand}, 
      ${({ theme }) => theme.colors.accent}, 
      ${({ theme }) => theme.colors.brandDark}, 
      ${({ theme }) => theme.colors.accentLight}
    );
    background-size: 300% 300%;
    animation: ${gradientBorderAnimation} 10s ease infinite;
    opacity: 0.7;
    filter: blur(3px);
  }
`;

const JournalPage = () => {
  // Removed password protection for easier access
  const [authenticated, setAuthenticated] = useState(true);
  
  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageContainer>
      <ConfidentialWatermark>CONFIDENTIAL</ConfidentialWatermark>
      
      <PageWrapper>
        <GradientBorder>
          <ConfidentialHeader />
        </GradientBorder>
        
        <GradientBorder>
          <TableOfContents 
            sections={journalSections} 
            onSectionClick={handleSectionClick} 
          />
        </GradientBorder>
        
        {journalSections.map((section) => (
          <GradientBorder key={section.id}>
            <JournalSection section={section} />
          </GradientBorder>
        ))}
        
        <JournalFooter />
      </PageWrapper>
    </PageContainer>
  );
};

export default JournalPage;