// src/pages/SimpleLandingPage.js
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import { FaArrowDown, FaLock, FaMugHot, FaCheck, FaBook, FaMobileAlt, FaBrain } from 'react-icons/fa';

const SimpleLandingPage = () => {
  console.log("SimpleLandingPage component is rendering");
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Create refs for each section
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Function to scroll to specific sections
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      if (menuOpen) {
        setMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    console.log("SimpleLandingPage useEffect is running");
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={`${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`} alt="Καιρός" />
          </Link>
          
          <button className="mobile-toggle" onClick={toggleMenu}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          
          <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <button 
              onClick={() => scrollToSection(problemRef)} 
              className="navbar-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection(solutionRef)} 
              className="navbar-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection(productsRef)} 
              className="navbar-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className="navbar-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Contact
            </button>
            <a href="https://ko-fi.com/kairosaijournal" className="kofi-button" target="_blank" rel="noreferrer">
              <FaMugHot /> Support on Ko-Fi
            </a>
            <Link to="/nda" className="cta-button">
              <FaLock /> Get Confidential Info
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in">Ancient Wisdom Meets AI</h1>
              <div className="hero-subtitle fade-in delay-100">Bridging traditional journaling with AI-powered insights</div>
              <p className="hero-description fade-in delay-200">
                Transform your handwritten reflections into personalized growth opportunities with our NFC-enabled journals and AI analysis.
              </p>
              <div className="hero-buttons">
                <button 
                  onClick={() => scrollToSection(problemRef)} 
                  className="primary-button fade-in delay-300"
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  <FaArrowDown /> Learn More
                </button>
                <Link to="/nda" className="secondary-button fade-in delay-400">
                  <FaLock /> Get Confidential Info
                </Link>
                <a href="https://ko-fi.com/kairosaijournal" className="outline-button fade-in delay-500" target="_blank" rel="noreferrer">
                  <FaMugHot /> Support Our Work
                </a>
              </div>
            </div>
            <div className="hero-image fade-in delay-300">
              <img src={`${process.env.PUBLIC_URL}/static/images/kairos-hero.webp`} alt="Καιρός Smart Journal" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section" ref={problemRef}>
        <div className="container">
          <h2 className="section-title">The Personal Growth Challenge</h2>
          <p className="section-subtitle">
            In our increasingly digital world, people are struggling to maintain consistent journaling practices while also managing screen fatigue.
          </p>
          
          <div className="problem-grid">
            <div className="problem-card fade-in">
              <div className="problem-icon"><FaBook /></div>
              <h3 className="problem-title">Abandoned Journals</h3>
              <p className="problem-description">
                80% of journals are abandoned within a month of purchase. Users lack structure and guidance to maintain the habit.
              </p>
            </div>
            
            <div className="problem-card fade-in delay-100">
              <div className="problem-icon"><FaBrain /></div>
              <p className="problem-title">Lost Insights</p>
              <p className="problem-description">
                90% of handwritten entries are never revisited for patterns. Valuable self-knowledge remains buried in unanalyzed pages.
              </p>
            </div>
            
            <div className="problem-card fade-in delay-200">
              <div className="problem-icon"><FaMobileAlt /></div>
              <h3 className="problem-title">Digital Dilemma</h3>
              <p className="problem-description">
                Digital journaling increases screen time and anxiety. We spend 7+ hours daily on screens already, yet handwriting offers neurological benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section section-colored" ref={solutionRef}>
        <div className="container">
          <h2 className="section-title">Our Solution</h2>
          <p className="section-subtitle">
            Καιρός bridges the gap between traditional journaling and AI-powered insights, creating a seamless experience that honors both worlds.
          </p>
          
          <div className="solution-container">
            <div className="solution-image fade-in">
              <img src={`${process.env.PUBLIC_URL}/static/images/product/nfc_scanning.jpg`} alt="NFC Scanning" />
            </div>
            
            <div className="solution-content">
              <h3 className="solution-title fade-in">The Physical-Digital Bridge</h3>
              <p className="solution-description fade-in delay-100">
                Our innovative approach combines the best of both worlds - the therapeutic benefits of handwriting with the analytical power of AI.
              </p>
              
              <div className="solution-features">
                <div className="feature-item fade-in delay-200">
                  <div className="feature-icon"><FaCheck /></div>
                  <div className="feature-text">
                    <h4 className="feature-title">Premium NFC Journals</h4>
                    <p className="feature-description">Beautifully crafted journals with embedded NFC technology.</p>
                  </div>
                </div>
                
                <div className="feature-item fade-in delay-300">
                  <div className="feature-icon"><FaCheck /></div>
                  <div className="feature-text">
                    <h4 className="feature-title">AI Insight Analysis</h4>
                    <p className="feature-description">Advanced pattern recognition identifies growth opportunities.</p>
                  </div>
                </div>
                
                <div className="feature-item fade-in delay-400">
                  <div className="feature-icon"><FaCheck /></div>
                  <div className="feature-text">
                    <h4 className="feature-title">Structured Journeys</h4>
                    <p className="feature-description">Guided reflection paths for consistent practice and progress.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/nda" className="primary-button fade-in delay-500">
                <FaLock /> Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section" ref={productsRef}>
        <div className="container">
          <div className="products-heading">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Choose the journaling experience that fits your needs, from essential to premium.
            </p>
          </div>
          
          <div className="product-grid">
            <div className="product-card fade-in">
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_essential.jpg`} alt="Essential Journal" />
              </div>
              <div className="product-content">
                <div className="product-category">Basic</div>
                <h3 className="product-title">Καιρός Essential</h3>
                <div className="product-price">€89</div>
                <p className="product-description">
                  Perfect entry point with leatherette journal, 200 pages, and 1-month complimentary subscription.
                </p>
                <Link to="/nda" className="product-button">Learn More</Link>
              </div>
            </div>
            
            <div className="product-card fade-in delay-100">
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_insight.jpg`} alt="Insight Journal" />
              </div>
              <div className="product-content">
                <div className="product-category">Advanced</div>
                <h3 className="product-title">Καιρός Insight</h3>
                <div className="product-price">€149</div>
                <p className="product-description">
                  Premium leather journal with brass pen, specialty nibs, and 3-month complimentary subscription.
                </p>
                <Link to="/nda" className="product-button">Learn More</Link>
              </div>
            </div>
            
            <div className="product-card fade-in delay-200">
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/static/images/product/journal_legacy.jpg`} alt="Legacy Journal" />
              </div>
              <div className="product-content">
                <div className="product-category">Premium</div>
                <h3 className="product-title">Καιρός Legacy</h3>
                <div className="product-price">€249</div>
                <p className="product-description">
                  Exquisite hand-bound leather journal with complete journaling ritual kit and 6-month complimentary subscription.
                </p>
                <Link to="/nda" className="product-button">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="subscription-teaser" style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '30px',
            backgroundColor: 'rgba(13, 123, 62, 0.1)',
            borderRadius: '15px',
          }}>
            <h3 style={{ marginBottom: '15px', color: '#0D7B3E' }}>Digital Subscription Plans</h3>
            <p style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
              After your complimentary period, continue your journaling journey with our flexible subscription options starting at €11.99/month.
            </p>
            <Link to="/nda" className="secondary-button">
              View Subscription Details
            </Link>
          </div>
        </div>
      </section>

      

      {/* Ko-fi Widget Section */}
      <section className="section section-colored">
        <div className="container">
          <div className="kofi-container">
            <h2 className="kofi-heading">Support Our Development</h2>
            <p className="kofi-description">
              Help us bring Καιρός to life by supporting our development efforts. Every contribution helps us create a better product.
            </p>
            
            {/* Ko-fi Widget */}
            <iframe 
              id='kofiframe' 
              src='https://ko-fi.com/kairosaijournal/?hidefeed=true&widget=true&embed=true&preview=true' 
              style={{border: 'none', width: '100%', padding: '4px', background: '#f9f9f9', borderRadius: '8px', height: '550px'}} 
              title="ko-fi widget" 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" ref={contactRef}>
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about Καιρός? We'd love to hear from you.
          </p>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-title fade-in">Get in Touch</h3>
              <p className="contact-description fade-in delay-100">
                Schedule a call to discuss how Καιρός is transforming personal growth through the bridge between ancient wisdom and AI.
              </p>
              
              <div className="contact-links">
                <a href="mailto:hello@kairos-journal.com" className="contact-link fade-in delay-200">
                  <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                  hello@kairos-journal.com
                </a>
                <Link to="/nda" className="primary-button fade-in delay-300">
                  <FaLock /> Access Confidential Info
                </Link>
              </div>
            </div>
            
            <div className="calendly-container" style={{ 
                  width: '100%', 
                  height: '700px',
                  overflow: 'hidden',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  marginTop: '20px' 
                }}>
                  <iframe
                    src="https://calendly.com/georgieslab/google-meet-jump-in"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Meeting"
                    style={{ border: 'none' }}
                  />
                </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div>
              <div className="footer-logo">
                <img src={`${process.env.PUBLIC_URL}/static/icons/kairos-logo.svg`} alt="Καιρός" />
                Καιρός
              </div>
              <p className="footer-description">
                Bridging traditional journaling with AI-powered insights to transform personal reflection into structured growth.
              </p>
            </div>
            
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <div className="footer-links">
                <button 
                  onClick={() => scrollToSection(problemRef)} 
                  className="footer-link"
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
                >
                  Problem
                </button>
                <button 
                  onClick={() => scrollToSection(solutionRef)} 
                  className="footer-link"
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
                >
                  Solution
                </button>
                <button 
                  onClick={() => scrollToSection(productsRef)} 
                  className="footer-link"
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection(contactRef)} 
                  className="footer-link"
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="footer-title">Legal</h3>
              <div className="footer-links">
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
                <Link to="/confidentiality" className="footer-link">Confidentiality</Link>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Καιρός. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default SimpleLandingPage;