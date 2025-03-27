// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/NavBar'; // Fixed case sensitivity
import ProgressBar from '../components/common/ProgressBar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import ProductSection from '../components/home/ProductSection';
import MarketSection from '../components/home/MarketSection';
import TractionSection from '../components/home/TractionSection';
import TeamSection from '../components/home/TeamSection';
import InvestmentSection from '../components/home/InvestmentSection';
import ContactSection from '../components/home/ContactSection';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    'home',
    'problem',
    'solution',
    'product',
    'market',
    'traction',
    'team',
    'investment',
    'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Loop through each section to find which one is currently in view
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          
          // Check if the current scroll position is within this section
          if (
            scrollPosition >= sectionTop - windowHeight / 3 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight / 3
          ) {
            if (currentSection !== index) {
              setCurrentSection(index);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, sections]);

  return (
    <PageContainer>
      <Navbar />
      <ProgressBar sections={sections} currentSection={currentSection} />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <MarketSection />
      <TractionSection />
      <TeamSection />
      <InvestmentSection />
      <ContactSection />
      
      <Footer />
    </PageContainer>
  );
};

export default HomePage;