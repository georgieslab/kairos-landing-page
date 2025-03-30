// src/components/journal/SubscriptionPricing.js
import React from 'react';
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

const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const PricingCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.8) 0%,
    rgba(43, 70, 60, 0.5) 100%
  );
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${({ accentColor }) => accentColor || 'linear-gradient(90deg, #0D7B3E, #10B068)'};
    opacity: 0.8;
  }

  ${({ popular }) => popular && `
    border: 2px solid rgba(230, 184, 156, 0.5);
    transform: scale(1.05);
    
    &:hover {
      transform: translateY(-10px) scale(1.05);
    }
    
    &::before {
      height: 7px;
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 15px;
  right: -30px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 5px 40px;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(45deg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const TierName = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 15px;
  color: white;
`;

const PriceWrapper = styled.div`
  margin: 20px 0;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentLight};
  margin: 5px 0;
  
  span {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const BillingPeriod = styled.div`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  flex-grow: 1;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.5;
  
  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.accent};
    min-width: 20px;
    margin-top: 2px;
  }
`;

const SubscriptionPricing = ({ isVisible }) => {
  const renderCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <PricingContainer>
      <PricingCard accentColor="linear-gradient(90deg, #0D7B3E, #0A6030)">
        <TierName>Essential</TierName>
        <PriceWrapper>
          <Price>€11.99<span>/mo</span></Price>
          <BillingPeriod>Billed monthly</BillingPeriod>
        </PriceWrapper>
        <FeatureList>
          <Feature>{renderCheckIcon()} Text extraction and basic insights</Feature>
          <Feature>{renderCheckIcon()} 10-day Self-Discovery journey</Feature>
          <Feature>{renderCheckIcon()} Progress tracking</Feature>
          <Feature>{renderCheckIcon()} 1GB cloud storage</Feature>
          <Feature>{renderCheckIcon()} Basic privacy features</Feature>
        </FeatureList>
      </PricingCard>

      <PricingCard accentColor="linear-gradient(90deg, #E6B89C, #E69A73)" popular={true}>
        <PopularBadge>POPULAR</PopularBadge>
        <TierName>Insight</TierName>
        <PriceWrapper>
          <Price>€16.99<span>/mo</span></Price>
          <BillingPeriod>Billed monthly</BillingPeriod>
        </PriceWrapper>
        <FeatureList>
          <Feature>{renderCheckIcon()} Everything in Essential, plus:</Feature>
          <Feature>{renderCheckIcon()} Advanced pattern recognition</Feature>
          <Feature>{renderCheckIcon()} Emotional insights analysis</Feature>
          <Feature>{renderCheckIcon()} Custom audio meditations</Feature>
          <Feature>{renderCheckIcon()} Three journey themes</Feature>
          <Feature>{renderCheckIcon()} 5GB cloud storage</Feature>
          <Feature>{renderCheckIcon()} Enhanced privacy options</Feature>
        </FeatureList>
      </PricingCard>

      <PricingCard accentColor="linear-gradient(90deg, #B3A369, #D4C483)">
        <TierName>Legacy</TierName>
        <PriceWrapper>
          <Price>€21.99<span>/mo</span></Price>
          <BillingPeriod>Billed monthly</BillingPeriod>
        </PriceWrapper>
        <FeatureList>
          <Feature>{renderCheckIcon()} Everything in Insight, plus:</Feature>
          <Feature>{renderCheckIcon()} Custom journey creation</Feature>
          <Feature>{renderCheckIcon()} Monthly AI coaching session</Feature>
          <Feature>{renderCheckIcon()} Personal journal book compilation</Feature>
          <Feature>{renderCheckIcon()} Unlimited cloud storage</Feature>
          <Feature>{renderCheckIcon()} Export features</Feature>
          <Feature>{renderCheckIcon()} Priority support</Feature>
        </FeatureList>
      </PricingCard>
    </PricingContainer>
  );
};

export default SubscriptionPricing;