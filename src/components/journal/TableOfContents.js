// src/components/journal/TableOfContents.js
import React, { useRef, useEffect, useState } from 'react';
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

const TocContainer = styled.div`
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 50px;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: 0.2s;
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
`;

const TocHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.accentLight};
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.accent}
  ) 1;
  
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.brandLight}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 6s linear infinite;
`;

const TocList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`;

const TocItem = styled.li`
  margin-bottom: 15px;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${slideInLeft} 0.5s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const TocLink = styled.button`
  display: flex;
  align-items: center;
  color: #d0d0d0;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
  text-align: left;
  width: 100%;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(85, 139, 110, 0.1),
      rgba(230, 184, 156, 0.2)
    );
    transition: width 0.4s ease;
    z-index: -1;
    border-radius: 30px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentLight};
    
    &:before {
      width: 100%;
    }
  }
`;

const TocNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.brandDark}
  );
  color: white;
  border-radius: 50%;
  margin-right: 15px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(85, 139, 110, 0.3);

  ${TocLink}:hover & {
    transform: scale(1.1);
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accentDark}
    );
    box-shadow: 0 2px 15px rgba(230, 184, 156, 0.4);
  }
`;

const TableOfContents = ({ sections, onSectionClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tocRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (tocRef.current) {
      observer.observe(tocRef.current);
    }

    return () => {
      if (tocRef.current) {
        observer.unobserve(tocRef.current);
      }
    };
  }, []);

  return (
    <TocContainer ref={tocRef} isVisible={isVisible}>
      <TocHeading>Contents</TocHeading>
      <TocList>
        {sections.map((section, index) => (
          <TocItem 
            key={section.id} 
            delay={`${0.3 + (index * 0.1)}s`}
            isVisible={isVisible}
          >
            <TocLink onClick={() => onSectionClick(section.id)}>
              <TocNumber>{section.number}</TocNumber> {section.title}
            </TocLink>
          </TocItem>
        ))}
      </TocList>
    </TocContainer>
  );
};

export default TableOfContents;