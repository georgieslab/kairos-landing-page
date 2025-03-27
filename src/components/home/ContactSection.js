// src/components/home/ContactSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLock, FaMugHot } from 'react-icons/fa';

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

const CalendlyWidget = styled.div`
  min-width: 320px;
  height: 480px;
  margin: 2rem 0;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accentLight};
  }
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

const ContactSection = () => {
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

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionContainer id="contact">
      <BackgroundPattern />
      <ContentWrapper isActive={isActive}>
        <Heading>Ready to Learn More?</Heading>
        <Description>
          Schedule a 30-minute call to discuss how Καιρός is transforming personal growth through 
          the bridge between ancient wisdom and AI.
        </Description>
        
        <CalendlyWidget 
          className="calendly-inline-widget"
          data-url="https://calendly.com/kairosjournal/introduction" 
        />
        
        <ContactInfo>
          <Description>Or contact us directly:</Description>
          <EmailLink href="mailto:hello@kairos-journal.com">
            hello@kairos-journal.com
          </EmailLink>
        </ContactInfo>

        <ActionButtons>
          <PrimaryButton to="/nda">
            <FaLock /> Sign NDA & Get Details
          </PrimaryButton>
          <OutlineButton href="https://ko-fi.com/kairosjournal" target="_blank">
            <FaMugHot /> Support on Ko-Fi
          </OutlineButton>
        </ActionButtons>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactSection;