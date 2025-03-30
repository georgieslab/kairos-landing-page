// src/pages/PrivacyPolicy.js
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

const PrivacyPolicy = () => {
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

        <Title>Privacy Policy</Title>
        <LastUpdated>Last Updated: March 15, 2025</LastUpdated>

        <Section>
          <Paragraph>
            At Καιρός, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website or use our Smart Journal service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <Paragraph>
            When you use our services, we may collect several types of information:
          </Paragraph>
          <List>
            <ListItem><strong>Account Information:</strong> When you create an account, we collect your name, email address, and other contact information.</ListItem>
            <ListItem><strong>Journal Content:</strong> The content you write in your journal, which may include personal reflections and experiences.</ListItem>
            <ListItem><strong>Usage Data:</strong> Information about how you use our service, including frequency of journaling, features used, and time spent.</ListItem>
            <ListItem><strong>Device Information:</strong> Information about the device you use to access our service, including hardware model, operating system, and browser type.</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <Paragraph>
            We use the information we collect to:
          </Paragraph>
          <List>
            <ListItem>Provide, maintain, and improve our services</ListItem>
            <ListItem>Process and fulfill your requests for our products and services</ListItem>
            <ListItem>Analyze patterns and trends to enhance the user experience</ListItem>
            <ListItem>Communicate with you about our services, including updates and promotional offers</ListItem>
            <ListItem>Detect, investigate, and prevent fraudulent transactions and unauthorized access to our services</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Privacy Controls and Choices</SectionTitle>
          <Paragraph>
            Καιρός offers a multi-tiered privacy architecture that gives you control over your data:
          </Paragraph>
          <List>
            <ListItem><strong>Level 1 - Complete Local Processing:</strong> Your journal entries remain on your device, with no cloud transmission.</ListItem>
            <ListItem><strong>Level 2 - Anonymized Pattern Analysis:</strong> Only anonymized patterns are analyzed in the cloud.</ListItem>
            <ListItem><strong>Level 3 - Full Cloud Processing:</strong> Entries are processed in the cloud with encryption.</ListItem>
            <ListItem><strong>Level 4 - Secure Sharing:</strong> Optional secure sharing with selected mentors or coaches.</ListItem>
          </List>
          <Paragraph>
            You can change your privacy settings at any time through your account preferences.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. Data Retention</SectionTitle>
          <Paragraph>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </Paragraph>
          <Paragraph>
            You can request deletion of your account and associated data at any time through your account settings or by contacting us directly.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Security</SectionTitle>
          <Paragraph>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </Paragraph>
          <Paragraph>
            These measures include encryption of sensitive data, secure authentication mechanisms, and regular security assessments.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Changes to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> privacy@kairos-journal.com<br />
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

export default PrivacyPolicy;