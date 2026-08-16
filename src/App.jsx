import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import SecurityLedger from './components/SecurityLedger';
import CareerPackageBuilder from './components/CareerPackageBuilder';
import TrustSection from './components/TrustSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Synchronize with URL hash for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'services', 'cybersecurity', 'career-hub', 'trust', 'portfolio', 'contact'];
      if (hash && validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (serviceName = '') => {
    setSelectedService(serviceName);
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
    setSelectedService('');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar with Active Tab Indicators */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenContact={handleOpenContact}
      />

      {/* Main Tab Content View: Renders ONLY the selected tab */}
      <main style={{ flexGrow: 1, minHeight: '65vh' }}>
        {activeTab === 'home' && (
          <Hero onNavigate={handleTabChange} onOpenContact={handleOpenContact} />
        )}

        {activeTab === 'services' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <ServicesSection onOpenContact={handleOpenContact} />
          </div>
        )}

        {activeTab === 'cybersecurity' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <SecurityLedger onOpenContact={handleOpenContact} />
          </div>
        )}

        {activeTab === 'career-hub' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <CareerPackageBuilder onOpenContact={handleOpenContact} />
          </div>
        )}

        {activeTab === 'trust' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <TrustSection onOpenContact={handleOpenContact} />
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <PortfolioSection onOpenContact={handleOpenContact} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div style={{ paddingTop: 'clamp(65px, 8vw, 85px)' }}>
            <ContactSection isOpen={false} initialService={selectedService} onClose={handleCloseContact} />
          </div>
        )}
      </main>

      {/* Modal Popup Contact Overlay */}
      {contactModalOpen && (
        <ContactSection
          isOpen={true}
          initialService={selectedService}
          onClose={handleCloseContact}
        />
      )}

      {/* Footer with Tab Switcher Links */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}
