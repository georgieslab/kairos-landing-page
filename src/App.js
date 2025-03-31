// src/App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleLandingPage from './pages/SimpleLandingPage';
import NdaPage from './pages/NdaPage';
import ThankYouPage from './pages/ThankYouPage';
import JournalPage from './pages/JournalPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Confidentiality from './pages/Confidentiality';

function App() {
  console.log("App component is rendering");
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    console.log("App useEffect is running - checking authentication");
    // Check if the user has signed the NDA (stored in session/local storage)
    const hasSignedNDA = sessionStorage.getItem('hasSignedNDA') === 'true';
    setAuthenticated(hasSignedNDA);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SimpleLandingPage />} />
        <Route path="/nda" element={<NdaPage setAuthenticated={setAuthenticated} />} />
        <Route path="/nda/thank-you" element={<ThankYouPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/confidentiality" element={<Confidentiality />} />
      </Routes>
    </Router>
  );
}

export default App;