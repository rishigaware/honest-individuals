import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Home, Layout, ShieldAlert, GraduationCap, ShieldCheck, Layers, Mail } from 'lucide-react';

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
    { id: 'portfolio', name: 'Portfolio', icon: <Layers size={13} /> },
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
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid rgba(226, 232, 240, 0.7)',
        boxShadow: scrolled ? '0 4px 20px -4px rgba(15, 23, 42, 0.06)' : 'none',
        padding: scrolled ? '8px 0' : '12px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo & Name */}
        <div
          onClick={() => handleNavClick('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', minWidth: 0 }}
        >
          <img
            src="/logo.png"
            alt="Honest Individuals Logo"
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
                fontSize: 'clamp(0.94rem, 2vw, 1.05rem)',
                letterSpacing: '-0.01em',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>HONEST</span>
              <span style={{ color: 'var(--accent-primary)' }}>INDIVIDUALS</span>
            </div>
            <div
              style={{
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                fontWeight: 600,
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              MSME Verified • Tech & Security Firm
            </div>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '4px', background: '#f1f5f9', padding: '4px 6px', borderRadius: '9999px', border: '1px solid var(--border-subtle)' }} className="desktop-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  color: isActive ? '#ffffff' : 'var(--text-body)',
                  background: isActive ? '#0f172a' : 'transparent',
                  boxShadow: isActive ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: 'none',
                  cursor: 'pointer',
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
            <span style={{ display: 'inline' }}>Consultation</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: 'var(--text-main)',
              padding: '8px',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
              background: '#ffffff',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)',
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
            background: '#ffffff',
            borderBottom: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-xl)',
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
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  background: isActive ? '#0f172a' : '#f8fafc',
                  border: isActive ? '1px solid #0f172a' : '1px solid var(--border-subtle)',
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
                {isActive && <span style={{ fontSize: '0.7rem', background: '#38bdf8', color: '#0f172a', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>Active</span>}
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
