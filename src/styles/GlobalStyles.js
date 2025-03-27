// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.fontSizes['5xl']};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: ${theme.space.lg};
  }

  h2 {
    font-size: ${theme.fontSizes['3xl']};
    font-weight: ${theme.fontWeights.semibold};
    margin-bottom: ${theme.space.lg};
  }

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.medium};
    margin-bottom: ${theme.space.md};
  }

  p {
    font-size: ${theme.fontSizes.lg};
    line-height: 1.6;
    margin-bottom: ${theme.space.lg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
  }

  ul, ol {
    list-style-position: inside;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: ${theme.fontSizes['4xl']};
    }

    h2 {
      font-size: ${theme.fontSizes['2xl']};
    }

    h3 {
      font-size: ${theme.fontSizes.xl};
    }

    p {
      font-size: ${theme.fontSizes.md};
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s forwards;
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;

export default GlobalStyles;