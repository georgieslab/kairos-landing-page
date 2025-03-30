// src/components/journal/JournalSection.js
import React, { useState, useEffect, useRef } from 'react';
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

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
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

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(85, 139, 110, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(85, 139, 110, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(85, 139, 110, 0.2);
  }
`;

const SectionContainer = styled.div`
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px;
  position: relative;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  
  &:hover {
    box-shadow: 0 0 30px rgba(85, 139, 110, 0.2);
  }
`;

const SectionNumber = styled.div`
  position: absolute;
  top: -20px;
  left: 40px;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.brand}, ${({ theme }) => theme.colors.brandDark});
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(85, 139, 110, 0.4);
  z-index: 10;
`;

const SectionHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 25px;
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
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.brandLight}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ theme }) => theme.colors.accent}; /* Fallback color */
  animation: ${shimmer} 6s linear infinite;
`;

const ContentBlock = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin: 30px 0 15px;
  color: ${({ theme }) => theme.colors.accent};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const SmallHeading = styled.h4`
  font-size: 1.2rem;
  margin: 25px 0 15px;
  color: ${({ theme }) => theme.colors.accentLight};
  font-weight: 500;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  color: #e0e0e0;
  line-height: 1.7;
`;

const List = styled.ul`
  margin: 0 0 20px 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  opacity: 0;
  animation: ${slideInRight} 0.4s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  color: #d0d0d0;
  
  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    rgba(230, 184, 156, 0.1) 0%,
    rgba(230, 184, 156, 0.2) 100%
  );
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  padding: 25px;
  margin: 30px 0;
  border-radius: 0 10px 10px 0;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  & h4 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.accent};
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const StatItem = styled.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.6) 0%,
    rgba(43, 70, 60, 0.3) 100%
  );
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.6s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
`;

const ChartContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.6) 0%,
    rgba(43, 70, 60, 0.3) 100%
  );
  border-radius: 12px;
  padding: 25px;
  margin: 30px 0;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.8s forwards;
  animation-delay: ${({ delay }) => delay || '0s'};
  animation-play-state: ${({ isVisible }) => (isVisible ? 'running' : 'paused')};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Chart = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto;
`;

const JournalSection = ({ section }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is 20% or more in view, start animations
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderContent = (content) => {
    if (!content) return null;

    return content.map((item, index) => {
      // Calculate animation delays based on index
      const baseDelay = 0.1 + (index * 0.1);
      
      switch (item.type) {
        case 'paragraph':
          return (
            <ContentBlock 
              key={index} 
              delay={`${baseDelay}s`} 
              isVisible={isVisible}
            >
              <Paragraph>{item.text}</Paragraph>
            </ContentBlock>
          );
          
        case 'subheading':
          return (
            <ContentBlock 
              key={index} 
              delay={`${baseDelay}s`} 
              isVisible={isVisible}
            >
              <SubHeading>{item.text}</SubHeading>
            </ContentBlock>
          );
          
        case 'smallheading':
          return (
            <ContentBlock 
              key={index} 
              delay={`${baseDelay}s`} 
              isVisible={isVisible}
            >
              <SmallHeading>{item.text}</SmallHeading>
            </ContentBlock>
          );
          
        case 'list':
          return (
            <ContentBlock 
              key={index} 
              delay={`${baseDelay}s`} 
              isVisible={isVisible}
            >
              <List>
                {item.items.map((listItem, listIndex) => (
                  <ListItem 
                    key={listIndex} 
                    delay={`${baseDelay + (listIndex * 0.05)}s`}
                    isVisible={isVisible}
                  >
                    {listItem}
                  </ListItem>
                ))}
              </List>
            </ContentBlock>
          );
          
        case 'highlight':
          return (
            <HighlightBox 
              key={index} 
              delay={`${baseDelay}s`}
              isVisible={isVisible}
            >
              <SmallHeading>{item.title}</SmallHeading>
              {item.text && <Paragraph>{item.text}</Paragraph>}
              {item.items && (
                <List>
                  {item.items.map((listItem, listIndex) => (
                    <ListItem 
                      key={listIndex}
                      delay={`${baseDelay + 0.1 + (listIndex * 0.05)}s`}
                      isVisible={isVisible}
                    >
                      {listItem}
                    </ListItem>
                  ))}
                </List>
              )}
            </HighlightBox>
          );
          
        case 'stats':
          return (
            <StatGrid key={index}>
              {item.items.map((stat, statIndex) => (
                <StatItem 
                  key={statIndex}
                  delay={`${baseDelay + (statIndex * 0.1)}s`}
                  isVisible={isVisible}
                >
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatGrid>
          );
          
        case 'chart':
          return (
            <ChartContainer 
              key={index}
              delay={`${baseDelay}s`}
              isVisible={isVisible}
            >
              <Chart src={item.src} alt={item.alt} />
            </ChartContainer>
          );
          
        case 'custom':
          return (
            <ContentBlock 
              key={index} 
              delay={`${baseDelay}s`} 
              isVisible={isVisible}
            >
              {item.render(isVisible)}
            </ContentBlock>
          );
          
        default:
          return null;
      }
    });
  };

  return (
    <SectionContainer 
      id={section.id} 
      ref={sectionRef}
      delay="0.2s"
      isVisible={isVisible}
    >
      <SectionNumber>{section.number}</SectionNumber>
      <SectionHeading>{section.title}</SectionHeading>
      {renderContent(section.content)}
    </SectionContainer>
  );
};

export default JournalSection;