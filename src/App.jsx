import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessPipeline from './components/ProcessPipeline';
import SecurityLedger from './components/SecurityLedger';
import CareerPackageBuilder from './components/CareerPackageBuilder';
import TrustSection from './components/TrustSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollAnimations } from './animations/ScrollAnimations';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Initialize GSAP ScrollTrigger animations for all sections
  useScrollAnimations();

  // ScrollSpy IntersectionObserver to update Navbar active tab on scroll
  useEffect(() => {
    const sectionIds = ['home', 'services', 'process', 'cybersecurity', 'career-hub', 'trust', 'portfolio', 'contact'];

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveTab(id);
            if (window.history.replaceState) {
              window.history.replaceState(null, null, `#${id}`);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spyObserver.observe(el);
    });

    return () => {
      spyObserver.disconnect();
    };
  }, []);

  // Smooth Scroll to Section when Tab is clicked
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -70; // offset for fixed top navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
      {/* Fixed Navigation Bar with Active Tab Indicators */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenContact={handleOpenContact}
      />

      {/* Main Single-Page View: All 8 Core Sections */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Section 01: Home / Hero */}
        <section id="home">
          <Hero onNavigate={handleTabChange} onOpenContact={handleOpenContact} />
        </section>

        {/* Section 02: Digital Engineering & Services */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Section 03: Conscious Lifecycle & Manufacturing Process */}
        <section id="process">
          <ProcessPipeline onOpenContact={handleOpenContact} />
        </section>

        {/* Section 04: Offensive Cybersecurity & VAPT */}
        <SecurityLedger onOpenContact={handleOpenContact} />

        {/* Section 05: Career Hub & ATS Package Builder */}
        <CareerPackageBuilder onOpenContact={handleOpenContact} />

        {/* Section 06: Trust, Governance & MSME Compliance */}
        <TrustSection onOpenContact={handleOpenContact} />

        {/* Section 07: Selected Deliveries & Portfolio */}
        <PortfolioSection onOpenContact={handleOpenContact} />

        {/* Section 08: Direct Consultation & Contact Channels */}
        <ContactSection isOpen={false} initialService={selectedService} onClose={handleCloseContact} />

      </main>

      {/* Modal Popup Contact Overlay */}
      {contactModalOpen && (
        <ContactSection
          isOpen={true}
          initialService={selectedService}
          onClose={handleCloseContact}
        />
      )}

      {/* Footer with Smooth Section Scroll Links */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}
