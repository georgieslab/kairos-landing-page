// src/pages/TermsOfService.js
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

const SubsectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
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

const TermsOfService = () => {
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

        <Title>Terms of Service</Title>
        <LastUpdated>Last Updated: March 15, 2025</LastUpdated>

        <Section>
          <Paragraph>
            These Terms of Service ("Terms") govern your access to and use of the Καιρός Smart Journal service, including our website, mobile applications, and physical products (collectively, the "Service").
          </Paragraph>
          <Paragraph>
            By using our Service, you agree to these Terms. If you do not agree to these Terms, you may not use the Service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>1. Using Our Service</SectionTitle>
          
          <SubsectionTitle>1.1 Account Registration</SubsectionTitle>
          <Paragraph>
            To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </Paragraph>
          
          <SubsectionTitle>1.2 Account Security</SubsectionTitle>
          <Paragraph>
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your account. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.
          </Paragraph>
          
          <SubsectionTitle>1.3 Age Restrictions</SubsectionTitle>
          <Paragraph>
            The Service is not directed to children under 16. If you are under 16, you may not use the Service. If we learn that we have collected personal information from a child under 16, we will delete that information as quickly as possible.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Subscriptions and Purchases</SectionTitle>
          
          <SubsectionTitle>2.1 Fees and Billing</SubsectionTitle>
          <Paragraph>
            Certain aspects of the Service require payment of fees. You agree to pay all fees in accordance with the fees, charges, and billing terms in effect at the time a fee is due and payable.
          </Paragraph>
          
          <SubsectionTitle>2.2 Subscription Terms</SubsectionTitle>
          <Paragraph>
            Our subscription services are billed on a recurring basis. You can cancel your subscription at any time, but no refunds will be issued for any partial billing periods.
          </Paragraph>
          
          <SubsectionTitle>2.3 Physical Products</SubsectionTitle>
          <Paragraph>
            For physical products purchased from Καιρός, title and risk of loss pass to you upon delivery of the product to the carrier. We reserve the right to modify, suspend, or discontinue the sale of any product at any time without notice.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. User Content</SectionTitle>
          
          <Paragraph>
            Our Service allows you to create, store, and share content such as journal entries, reflections, and associated data ("User Content").
          </Paragraph>
          
          <SubsectionTitle>3.1 Ownership</SubsectionTitle>
          <Paragraph>
            You retain all rights in, and are solely responsible for, the User Content you create using our Service.
          </Paragraph>
          
          <SubsectionTitle>3.2 License to Καιρός</SubsectionTitle>
          <Paragraph>
            By submitting User Content to the Service, you grant Καιρός a worldwide, non-exclusive, royalty-free license to use, copy, process, and store your User Content for the purposes of providing the Service to you. This license is solely to enable us to technically provide, improve, and develop the Service.
          </Paragraph>
          
          <SubsectionTitle>3.3 Privacy Controls</SubsectionTitle>
          <Paragraph>
            You have control over your User Content through our multi-tiered privacy architecture, as outlined in our Privacy Policy.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. Intellectual Property</SectionTitle>
          
          <Paragraph>
            The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of Καιρός and its licensors.
          </Paragraph>
          
          <Paragraph>
            Our trademarks, service marks, and logos used and displayed on the Service are registered or unregistered trademarks of Καιρός. You may not use, copy, reproduce, or display any of these marks without our prior written permission.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>5. Disclaimer of Warranties</SectionTitle>
          
          <Paragraph>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </Paragraph>
          
          <Paragraph>
            Καιρός does not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, or that the Service or the servers that make it available are free of viruses or other harmful components.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Limitation of Liability</SectionTitle>
          
          <Paragraph>
            IN NO EVENT SHALL ΚΑΙΡΌΣ, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
          </Paragraph>
          
          <Paragraph>
            Our liability is limited to the maximum extent permitted by law.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Changes to These Terms</SectionTitle>
          
          <Paragraph>
            We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.
          </Paragraph>
          
          <Paragraph>
            You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Contact Us</SectionTitle>
          
          <Paragraph>
            If you have any questions about these Terms, please contact us at:
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> legal@kairos-journal.com<br />
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

export default TermsOfService;