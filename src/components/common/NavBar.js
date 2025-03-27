// src/components/common/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMugHot } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  z-index: ${({ theme }) => theme.zIndices.navbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accentLight};
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

const LogoImage = styled.img`
  margin-right: 8px;
  height: 28px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(30, 30, 30, 0.95);
    padding: 1.5rem;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: all 0.3s ease;
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NdaButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brandDark};
    transform: translateY(-2px);
  }
`;

const KofiButton = styled.a`
  background-color: #29ABE0;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #2089B9;
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
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

  return (
    <NavbarContainer scrolled={scrolled}>
      <LogoContainer to="/">
        <LogoImage src="/static/icons/logo/kairos-logo.svg" alt="Καιρός Logo" />
        Καιρός
      </LogoContainer>

      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>

      <NavLinks isOpen={isOpen}>
        <NavLink to="/#problem" onClick={closeMenu}>Problem</NavLink>
        <NavLink to="/#solution" onClick={closeMenu}>Solution</NavLink>
        <NavLink to="/#product" onClick={closeMenu}>Product</NavLink>
        <NavLink to="/#market" onClick={closeMenu}>Market</NavLink>
        <NavLink to="/#contact" onClick={closeMenu}>Contact</NavLink>
        <KofiButton href="https://ko-fi.com/kairosjournal" target="_blank">
          <FaMugHot /> Support on Ko-Fi
        </KofiButton>
        <NdaButton to="/nda" onClick={closeMenu}>Get Confidential Info</NdaButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;