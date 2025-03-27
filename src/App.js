// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleLandingPage from './pages/SimpleLandingPage';
import NdaPage from './pages/NdaPage';
import ThankYouPage from './pages/ThankYouPage';
import JournalPage from './pages/JournalPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
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
      </Routes>
    </Router>
  );
}

export default App;