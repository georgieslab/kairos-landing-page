// src/pages/ThankYouPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand};
  padding: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

const Checkmark = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 50%;
  font-size: 60px;
  line-height: 100px;
  margin: 0 auto 30px;
  animation: scaleIn 0.6s ease-out;

  @keyframes scaleIn {
    0% { transform: scale(0); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  margin: 40px 0;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  transition: width 3s linear;
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    // Start progress animation
    setTimeout(() => {
      setProgress(100);
    }, 200);

    // Redirect to journal page
    const timer = setTimeout(() => {
      navigate('/journal');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageContainer>
      <ContentWrapper>
        <Logo src="/static/icons/logo/kairos-logo.svg" alt="Καιρός Logo" />
        <Checkmark>✓</Checkmark>
        <Heading>Thank You!</Heading>
        <Text>
          Your NDA has been successfully submitted and processed.
        </Text>
        <Text>
          You're being redirected to our confidential information package...
        </Text>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ThankYouPage;