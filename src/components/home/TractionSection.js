// src/components/home/TractionSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMugHot } from 'react-icons/fa';

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

const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
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

const OutlineButton = styled(ExternalLink)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: rgba(230, 184, 156, 0.1);
  }
`;

const TractionSection = () => {
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

    const section = document.getElementById('traction');
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
    <SectionContainer id="traction">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Current Traction</Heading>
        <Description>
          Despite being early stage, we've made significant progress:
        </Description>
        
        <Grid>
          <Card>
            <CardTitle>Product Development</CardTitle>
            <List>
              <ListItem>Working prototype with NFC integration</ListItem>
              <ListItem>Mobile app with journey framework</ListItem>
              <ListItem>Multiple journey paths of varying durations</ListItem>
              <ListItem>Pattern recognition algorithms</ListItem>
            </List>
          </Card>
          
          <Card>
            <CardTitle>Market Validation</CardTitle>
            <List>
              <ListItem>Over 175 waitlist sign-ups</ListItem>
              <ListItem>User testing with 25 participants</ListItem>
              <ListItem>88% reported insights as "valuable" or "very valuable"</ListItem>
              <ListItem>92% successfully paired their journal on first attempt</ListItem>
            </List>
          </Card>
        </Grid>
        
        <Description>
          We're now preparing for our initial production run and scaling our digital platform.
        </Description>

        <ActionButtons>
          <PrimaryButton to="/#team">Meet the Founder</PrimaryButton>
          <OutlineButton href="https://ko-fi.com/kairosjournal" target="_blank">
            <FaMugHot /> Support Our Development
          </OutlineButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TractionSection;