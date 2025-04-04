// src/pages/JournalPage.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ConfidentialHeader from '../components/journal/ConfidentialHeader';
import TableOfContents from '../components/journal/TableOfContents';
import JournalSection from '../components/journal/JournalSection';
import JournalFooter from '../components/journal/JournalFooter';
import JournalLoader from '../components/common/JournalLoader';
import { journalSections } from '../data/journalContent';

// Animations
const gradientBorderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #121212; /* Much darker background */
  background-image: radial-gradient(
    circle at 10% 20%, 
    rgba(43, 70, 60, 0.3) 0%,
    rgba(30, 30, 30, 0.5) 50%,
    rgba(13, 13, 13, 0.7) 100%
  );
  background-size: 200% 200%;
  animation: ${backgroundAnimation} 30s ease infinite;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.5s;
`;

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ConfidentialWatermark = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 12vw;
  color: rgba(255, 255, 255, 0.02);
  pointer-events: none;
  z-index: 1;
  font-weight: 700;
  white-space: nowrap;
`;

const GradientBorder = styled.div`
  position: relative;
  border-radius: 15px;
  margin-bottom: 60px;
  
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    border-radius: 18px;
    background: linear-gradient(
      45deg, 
      ${({ theme }) => theme.colors.brand}, 
      ${({ theme }) => theme.colors.accent}, 
      ${({ theme }) => theme.colors.brandDark}, 
      ${({ theme }) => theme.colors.accentLight}
    );
    background-size: 300% 300%;
    animation: ${gradientBorderAnimation} 10s ease infinite;
    opacity: 0.7;
    filter: blur(3px);
  }
`;

// Product Components
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
`;

const ProductCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.7) 0%,
    rgba(43, 70, 60, 0.4) 100%
  );
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProductImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 25px;
`;

const ProductCategory = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  font-size: 0.8rem;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.accent};
`;

const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.accentLight};
`;

const ProductDescription = styled.p`
  color: #d0d0d0;
  margin-bottom: 20px;
  line-height: 1.6;
`;

// Product Section Content
const ProductsContent = {
  id: "products-section",
  number: "5", // Adjust this number as needed based on your sections
  title: "Our Product Lineup",
  content: [
    {
      type: "paragraph",
      text: "Our product range offers a complete journaling experience, from premium physical journals with embedded NFC technology to digital subscriptions that provide AI-powered insights."
    },
    {
      type: "subheading",
      text: "Physical Products"
    },
    {
      type: "custom",
      render: (isVisible) => (
        <ProductGrid>
          <ProductCard>
            <ProductImage>
              <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_essential.jpg`} alt="Essential Journal" />
            </ProductImage>
            <ProductContent>
              <ProductCategory>Basic</ProductCategory>
              <ProductTitle>Καιρός Essential</ProductTitle>
              <ProductPrice>€89</ProductPrice>
              <ProductDescription>
                Perfect entry point with leatherette journal, 200 pages, and 1-month complimentary subscription.
              </ProductDescription>
            </ProductContent>
          </ProductCard>
          
          <ProductCard>
            <ProductImage>
              <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_insight.jpg`} alt="Insight Journal" />
            </ProductImage>
            <ProductContent>
              <ProductCategory>Advanced</ProductCategory>
              <ProductTitle>Καιρός Insight</ProductTitle>
              <ProductPrice>€149</ProductPrice>
              <ProductDescription>
                Premium leather journal with brass pen, specialty nibs, and 3-month complimentary subscription.
              </ProductDescription>
            </ProductContent>
          </ProductCard>
          
          <ProductCard>
            <ProductImage>
              <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_legacy.jpg`} alt="Legacy Journal" />
            </ProductImage>
            <ProductContent>
              <ProductCategory>Premium</ProductCategory>
              <ProductTitle>Καιρός Legacy</ProductTitle>
              <ProductPrice>€249</ProductPrice>
              <ProductDescription>
                Exquisite hand-bound leather journal with complete journaling ritual kit and 6-month complimentary subscription.
              </ProductDescription>
            </ProductContent>
          </ProductCard>
        </ProductGrid>
      )
    },
    {
      type: "paragraph",
      text: "Each product tier includes our proprietary NFC technology and provides access to our AI-powered app that transforms handwritten journal entries into structured insights."
    }
  ]
};

const JournalPage = () => {

  const [loading, setLoading] = useState(true);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [sectionsReady, setSectionsReady] = useState(false);
  
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload critical images
    const imagesToPreload = [
      `${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`,
      `${process.env.PUBLIC_URL}/static/images/product/journal_essential.jpg`,
      `${process.env.PUBLIC_URL}/static/images/product/journal_insight.jpg`,
      `${process.env.PUBLIC_URL}/static/images/product/journal_legacy.jpg`,
    ];
    
    let loadedImages = 0;
    const totalImages = imagesToPreload.length;
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setAllImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages++;
        console.error(`Failed to load image: ${src}`);
        if (loadedImages === totalImages) {
          setAllImagesLoaded(true);
        }
      };
    });
    
    // Prepare sections data
    const prepareJournalSections = () => {
      // Add product section to the array
      const updatedSections = [...journalSections];
      // Find the right position to insert (around the middle or where appropriate)
      updatedSections.splice(3, 0, ProductsContent);
      setSectionsReady(true);
    };
    
    prepareJournalSections();
    
    // Set a minimum loading time to avoid flashes of content
    const minLoadingTime = setTimeout(() => {
      if (allImagesLoaded && sectionsReady) {
        setLoading(false);
      }
    }, 2000);
    
    // Fallback if loading takes too long
    const maxLoadingTime = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => {
      clearTimeout(minLoadingTime);
      clearTimeout(maxLoadingTime);
    };
  }, [allImagesLoaded, sectionsReady]);
  
  useEffect(() => {
    if (allImagesLoaded && sectionsReady) {
      // Delay just a bit to ensure smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [allImagesLoaded, sectionsReady]);
  
  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add the Products section to the sections array
  const updatedSections = [...journalSections];
  // Find the right position to insert (around the middle or where appropriate)
  updatedSections.splice(3, 0, ProductsContent);

  return (
    <>
      <JournalLoader isLoading={loading} />
      
      <PageContainer>
        <ConfidentialWatermark>CONFIDENTIAL</ConfidentialWatermark>
        
        <PageWrapper>
          <GradientBorder>
            <ConfidentialHeader />
          </GradientBorder>
          
          <GradientBorder>
            <TableOfContents 
              sections={updatedSections} 
              onSectionClick={handleSectionClick} 
              forceVisible={!loading}
            />
          </GradientBorder>
          
          {updatedSections.map((section) => (
            <GradientBorder key={section.id}>
              <JournalSection 
                section={section} 
                forceVisible={!loading}
              />
            </GradientBorder>
          ))}
          
          <JournalFooter />
        </PageWrapper>
      </PageContainer>
    </>
  );
};

export default JournalPage;