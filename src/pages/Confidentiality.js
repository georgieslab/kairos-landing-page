// src/pages/Confidentiality.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: 80px 20px 40px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brand};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const BackButton = styled(Link)`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.brand};
`;

const HighlightBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-left: 4px solid ${({ theme }) => theme.colors.brand};
  padding: 20px;
  margin: 20px 0;
  border-radius: 0 5px 5px 0;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const List = styled.ul`
  margin: 15px 0 15px 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const Footer = styled.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.brandDark};
  }
`;

const Confidentiality = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Logo to="/">
            <img src={`${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`} alt="Καιρός" />
            Καιρός
          </Logo>
          <BackButton to="/">← Back to Home</BackButton>
        </Header>

        <Title>Confidentiality Statement</Title>
        <LastUpdated>Last Updated: March 15, 2025</LastUpdated>

        <Section>
          <Paragraph>
            At Καιρός, we understand the deeply personal nature of journaling. Your private thoughts, reflections, and personal growth journey deserve the highest level of confidentiality and protection. This Confidentiality Statement outlines our commitment to safeguarding your journal content and personal information.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Our Confidentiality Promise</SectionTitle>
          <HighlightBox>
            <Paragraph>
              <strong>Your journal is your sanctuary.</strong> We believe that your personal reflections should remain private and secure, with you in complete control of who—if anyone—can access your content.
            </Paragraph>
          </HighlightBox>
          <Paragraph>
            Unlike social media platforms or other digital services that monetize your data, Καιρός is built on a foundation of privacy-first design. We provide a secure space for reflection without the pressure of sharing or exposure.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Multi-Tiered Privacy Architecture</SectionTitle>
          <Paragraph>
            Our unique approach to confidentiality gives you unprecedented control through our multi-tiered privacy architecture:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Level 1: Complete Local Processing</strong><br />
              Your journal entries never leave your device. Processing and analysis happen entirely on your local device with no cloud transmission.
            </ListItem>
            <ListItem>
              <strong>Level 2: Anonymized Pattern Analysis</strong><br />
              Only anonymized patterns and metrics are sent to our servers for processing. Your actual journal content remains on your device.
            </ListItem>
            <ListItem>
              <strong>Level 3: Full Cloud Processing with Encryption</strong><br />
              Your encrypted journal content is processed in the cloud with advanced security measures, enabling enhanced insights and features.
            </ListItem>
            <ListItem>
              <strong>Level 4: Secure Sharing (Optional)</strong><br />
              You can selectively share specific entries or insights with trusted mentors, coaches, or therapists through encrypted channels.
            </ListItem>
          </List>
          <Paragraph>
            You choose your privacy level and can change it at any time. By default, all new accounts start at Level 1 (maximum privacy).
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Technical Safeguards</SectionTitle>
          <Paragraph>
            To ensure the confidentiality of your data, we implement:
          </Paragraph>
          <List>
            <ListItem><strong>End-to-End Encryption:</strong> When data leaves your device, it's protected using AES-256 encryption.</ListItem>
            <ListItem><strong>Zero-Knowledge Architecture:</strong> For cloud storage options, we implement zero-knowledge encryption where not even Καιρός staff can access your unencrypted content.</ListItem>
            <ListItem><strong>Secure Authentication:</strong> Multi-factor authentication and biometric verification options to prevent unauthorized access.</ListItem>
            <ListItem><strong>Regular Security Audits:</strong> Third-party security experts regularly evaluate our systems for vulnerabilities.</ListItem>
            <ListItem><strong>Transparent Data Handling:</strong> Clear documentation of how data flows through our system, with no hidden processes.</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Our Confidentiality Commitment</SectionTitle>
          <Paragraph>
            We will:
          </Paragraph>
          <List>
            <ListItem>Never sell your journal data or personal information to third parties</ListItem>
            <ListItem>Never use your journal content for targeted advertising</ListItem>
            <ListItem>Never scan your journal content for marketing purposes</ListItem>
            <ListItem>Never share your identifiable data without your explicit consent</ListItem>
            <ListItem>Always give you the option to permanently delete your data</ListItem>
            <ListItem>Always prioritize your privacy in how we design and update our services</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Confidential Information Package</SectionTitle>
          <Paragraph>
            For investors, partners, and other interested parties, we provide a Confidential Information Package that contains detailed information about our technology, business model, and future plans. This information is protected by a Non-Disclosure Agreement (NDA).
          </Paragraph>
          <Paragraph>
            To access our Confidential Information Package, please sign our NDA:
          </Paragraph>
          <CtaButton to="/nda">Access Confidential Information</CtaButton>
        </Section>

        <Section>
          <SectionTitle>Questions About Confidentiality</SectionTitle>
          <Paragraph>
            If you have any questions or concerns about how we protect your confidential information, please contact us at:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> confidentiality@kairos-journal.com<br />
            <strong>Address:</strong> Neustiftgasse 21/1/9, Böheimkirchen, 3107, Austria
          </Paragraph>
        </Section>

        <Footer>
          © {new Date().getFullYear()} Καιρός. All rights reserved.
        </Footer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Confidentiality;