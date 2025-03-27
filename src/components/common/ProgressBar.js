// src/components/common/ProgressBar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: ${({ progress }) => `${progress}%`};
  background: ${({ theme }) => theme.colors.accent};
  z-index: ${({ theme }) => theme.zIndices.navbar + 1};
  transition: width 0.2s ease;
`;

const NavigationDots = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    right: 1rem;
  }
`;

const NavDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ active, theme }) => active ? theme.colors.accent : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${({ active }) => active ? 'scale(1.3)' : 'scale(1)'};
`;

const ProgressBar = ({ sections = [], currentSection = 0 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress based on current section
    if (sections.length > 0) {
      const newProgress = ((currentSection + 1) / sections.length) * 100;
      setProgress(newProgress);
    }
  }, [currentSection, sections.length]);

  const handleDotClick = (index) => {
    // Scroll to the section
    const sectionId = sections[index];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ProgressContainer progress={progress} />
      <NavigationDots>
        {sections.map((section, index) => (
          <NavDot
            key={section}
            active={index === currentSection}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
    </>
  );
};

export default ProgressBar;