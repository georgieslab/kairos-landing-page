// src/components/common/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaLinkedin, FaMugHot } from 'react-icons/fa';

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

const FooterCopyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.space['2xl']};
  padding-top: ${({ theme }) => theme.space.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <LogoImage src="/static/icons/logo/kairos-logo.svg" alt="Καιρός Logo" />
            Καιρός
          </FooterLogo>
          <p>
            Bridging traditional journaling with AI-powered insights to
            transform personal reflection into structured growth.
          </p>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink to="/#problem">The Problem</FooterLink>
          <FooterLink to="/#solution">Our Solution</FooterLink>
          <FooterLink to="/#product">Product</FooterLink>
          <FooterLink to="/#market">Market</FooterLink>
          <FooterLink to="/nda">Get Confidential Info</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Connect With Us</FooterHeading>
          <FooterExternalLink href="mailto:hello@kairos-journal.com">
            <FaEnvelope /> hello@kairos-journal.com
          </FooterExternalLink>
          <FooterExternalLink href="https://twitter.com/kairosjournal" target="_blank">
            <FaTwitter /> Twitter
          </FooterExternalLink>
          <FooterExternalLink href="https://linkedin.com/company/kairosjournal" target="_blank">
            <FaLinkedin /> LinkedIn
          </FooterExternalLink>
          <FooterExternalLink href="https://ko-fi.com/kairosjournal" target="_blank">
            <FaMugHot /> Support on Ko-Fi
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