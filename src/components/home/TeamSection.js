// src/components/home/TeamSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const ProfileTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ProfileDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  max-height: 300px;
  box-shadow: ${({ theme }) => theme.shadows.md};
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

const OutlineButton = styled(ActionButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    background: rgba(230, 184, 156, 0.1);
  }
`;

const TeamSection = () => {
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

    const section = document.getElementById('team');
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
    <SectionContainer id="team">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Meet the Founder</Heading>
        
        <Grid>
          <ProfileContent>
            <ProfileName>Giorgi</ProfileName>
            <ProfileTitle>Creative Technologist & AI Innovator</ProfileTitle>
            <ProfileDescription>
              Combining a deep appreciation for ancient wisdom with modern technological expertise to 
              enhance human connection and personal growth.
            </ProfileDescription>
            <ProfileDescription>
              Previously created a multilingual AI application with NFC integration, supporting 9 languages.
            </ProfileDescription>
          </ProfileContent>
          
          <div>
            <ProfileImage 
              src="/static/images/team/founder.jpg" 
              alt="Giorgi - Founder of Καιρός" 
            />
          </div>
        </Grid>

        <ActionButtons>
          <PrimaryButton to="/#investment">Investment Opportunity</PrimaryButton>
          <OutlineButton to="/#contact">Contact Me</OutlineButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default TeamSection;