import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NarrativePage from './pages/NarrativePage';
import DataPage from './pages/DataPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('narrative');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="app">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {currentPage === 'narrative' && <NarrativePage />}
      {currentPage === 'data' && <DataPage />}
      {currentPage === 'resources' && <ResourcesPage />}
      {currentPage === 'about' && <AboutPage />}
      
      <Footer />
    </div>
  );
}

export default App;