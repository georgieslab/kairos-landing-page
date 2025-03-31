// src/components/common/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaLinkedin, FaMugHot, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.brandDark};
  padding: ${({ theme }) => theme.space['3xl']} ${({ theme }) => theme.space.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.accentLight};
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: ${({ theme }) => theme.space.sm};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.accentLight};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space.md};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.space.md};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space['2xl']};
  padding-top: ${({ theme }) => theme.space.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.lg};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  background-color: #FF5E5B;
  color: white;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all 0.3s ease;
  gap: ${({ theme }) => theme.space.sm};

  &:hover {
    background-color: #E54B48;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <LogoImage src={`${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`} alt="Καιρός Logo" />
            Καιρός
          </FooterLogo>
          <p>
            Bridging traditional journaling with AI-powered insights to
            transform personal reflection into structured growth.
          </p>
          
          <SocialLinks>
            <SocialIcon href="https://twitter.com/kairosaijournal" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/company/kairosaijournal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://github.com/GeorgiesLab/kairos-landing-page" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
          </SocialLinks>
          
          <SupportButton href="https://ko-fi.com/kairosaijournal" target="_blank" rel="noopener noreferrer">
            <FaMugHot /> Support on Ko-Fi
          </SupportButton>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/#problem">The Problem</FooterLink>
          <FooterLink to="/#solution">Our Solution</FooterLink>
          <FooterLink to="/#products">Products</FooterLink>
          <FooterLink to="/#contact">Contact</FooterLink>
          <FooterLink to="/nda">Get Confidential Info</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Legal & Contact</FooterHeading>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink to="/confidentiality">Confidentiality</FooterLink>
          <FooterExternalLink href="mailto:hello@kairos-journal.com">
            <FaEnvelope /> hello@kairos-journal.com
          </FooterExternalLink>
        </FooterSection>
      </FooterContent>

      <FooterCopyright>
        &copy; {currentYear} Καιρός. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;