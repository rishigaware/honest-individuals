import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Home, Layout, ShieldAlert, GraduationCap, ShieldCheck, Layers, Mail } from 'lucide-react';
import { BRAND_LOGO, BRAND_ALT } from '../constants/branding';

export default function Navbar({ activeTab = 'home', onSelectTab, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home', icon: <Home size={13} /> },
    { id: 'services', name: 'Services', icon: <Layout size={13} /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <ShieldAlert size={13} /> },
    { id: 'career-hub', name: 'Career Hub', icon: <GraduationCap size={13} /> },
    { id: 'trust', name: 'Trust & Governance', icon: <ShieldCheck size={13} /> },
    { id: 'portfolio', name: 'Decks & Portfolio', icon: <Layers size={13} /> },
    { id: 'contact', name: 'Contact Us', icon: <Mail size={13} /> },
  ];

  const handleNavClick = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(9, 11, 14, 0.95)' : 'rgba(9, 11, 14, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.06)',
        boxShadow: scrolled ? '0 4px 20px -4px rgba(0, 0, 0, 0.7)' : 'none',
        padding: scrolled ? '6px 0' : '10px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNavClick('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', cursor: 'pointer', minWidth: 0, flexShrink: 1 }}
        >
          <img
            src={BRAND_LOGO}
            alt={BRAND_ALT}
            style={{
              height: 'clamp(44px, 5.5vw, 56px)',
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(0.85rem, 2.4vw, 1.05rem)',
                letterSpacing: '-0.01em',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>HONEST</span>
              <span style={{ color: '#eb1623', textShadow: '0 0 20px rgba(235, 22, 35, 0.4)' }}>INDIVIDUALS</span>
            </div>
            <div
              style={{
                fontSize: '0.62rem',
                color: '#94a3b8',
                letterSpacing: '0.04em',
                fontWeight: 700,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              UDYAM-MP-13-0068161 • BHARAT
            </div>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '3px',
            background: 'rgba(20, 24, 34, 0.85)',
            padding: '4px 6px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          className="desktop-links"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 700 : 600,
                  padding: '6px 13px',
                  borderRadius: '9999px',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  background: isActive
                    ? 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)'
                    : 'transparent',
                  boxShadow: isActive
                    ? '0 3px 14px rgba(235, 22, 35, 0.45)'
                    : 'none',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#94a3b8';
                  }
                }}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={() => onOpenContact('General Consultation')}
            className="btn-primary"
            style={{
              padding: '7px 14px',
              fontSize: '0.8rem',
              minHeight: '34px',
            }}
          >
            <PhoneCall size={14} />
            <span className="nav-btn-text">Consultation</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: '#ffffff',
              padding: '8px',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              background: '#141822',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#0d1017',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: isActive ? '#ff3344' : '#cbd5e1',
                  background: isActive ? 'linear-gradient(135deg, rgba(235, 22, 35, 0.22) 0%, rgba(184, 13, 23, 0.12) 100%)' : '#141822',
                  border: isActive ? '1px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '11px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {link.icon} {link.name}
                </span>
                {isActive && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                      color: '#ffffff',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      fontWeight: 700,
                    }}
                  >
                    Active
                  </span>
                )}
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact('Direct Consultation');
            }}
            className="btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '6px',
              padding: '11px',
              fontSize: '0.86rem',
            }}
          >
            <PhoneCall size={15} /> Book Direct Consultation
          </button>
        </div>
      )}
    </header>
  );
}
