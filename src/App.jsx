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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // ScrollSpy & Scroll-Reveal IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'services', 'process', 'cybersecurity', 'career-hub', 'trust', 'portfolio', 'contact'];

    // 1. Ensure top home section is visible immediately
    const homeEl = document.getElementById('home');
    if (homeEl) homeEl.classList.add('is-visible');

    // 2. ScrollSpy Observer to update Navbar active tab on scroll
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

    // 3. Section-to-Section Scroll Transition Observer
    const sectionElements = document.querySelectorAll('.section-slide-animate, .card-slide-animate');
    
    // Check initial viewport position
    sectionElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.85) {
        el.classList.add('will-animate');
      } else {
        el.classList.add('is-in-view');
      }
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('will-animate');
            entry.target.classList.add('is-in-view');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sectionElements.forEach((el) => revealObserver.observe(el));

    // Scroll listener fallback for instantaneous responsive reveal
    const handleScrollFallback = () => {
      sectionElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 20) {
          el.classList.remove('will-animate');
          el.classList.add('is-in-view');
        }
      });
    };
    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      spyObserver.disconnect();
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScrollFallback);
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

      {/* Main Single-Page View: All sections flow naturally on one screen with scroll animations */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Section 01: Home / Hero */}
        <section id="home" className="section-slide-animate is-in-view">
          <Hero onNavigate={handleTabChange} onOpenContact={handleOpenContact} />
        </section>

        {/* Section 02: Digital Engineering & Services */}
        <section id="services" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <ServicesSection onOpenContact={handleOpenContact} />
        </section>

        {/* Section 02B: Conscious Lifecycle & Manufacturing Process (Lifeflow Inspired) */}
        <section id="process" className="section-slide-animate">
          <ProcessPipeline onOpenContact={handleOpenContact} />
        </section>

        {/* Section 03: Offensive Cybersecurity & VAPT */}
        <section id="cybersecurity" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <SecurityLedger onOpenContact={handleOpenContact} />
        </section>

        {/* Section 04: Career Hub & ATS Package Builder */}
        <section id="career-hub" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <CareerPackageBuilder onOpenContact={handleOpenContact} />
        </section>

        {/* Section 05: Trust, Governance & MSME Compliance */}
        <section id="trust" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <TrustSection onOpenContact={handleOpenContact} />
        </section>

        {/* Section 06: Selected Deliveries & Portfolio */}
        <section id="portfolio" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <PortfolioSection onOpenContact={handleOpenContact} />
        </section>

        {/* Section 07: Direct Consultation & Contact Channels */}
        <section id="contact" className="section-slide-animate" style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
          <ContactSection isOpen={false} initialService={selectedService} onClose={handleCloseContact} />
        </section>

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
