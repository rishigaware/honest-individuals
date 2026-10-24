import React from 'react';
import { Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { BRAND_LOGO, BRAND_ALT, BRAND_UDYAM, BRAND_EMAIL, BRAND_LOCATION } from '../constants/branding';

export default function Footer({ onSelectTab }) {
  const handleNav = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };

  return (
    <footer style={{ background: '#07090d', borderTop: '1px solid rgba(235, 22, 35, 0.2)', padding: 'clamp(36px, 6vw, 55px) 0 24px 0', color: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '32px', marginBottom: '32px' }}>
          
          {/* Col 1: Brand */}
          <div>
            <div
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer' }}
            >
              <img
                src={BRAND_LOGO}
                alt={BRAND_ALT}
                style={{
                  height: 'clamp(40px, 5vw, 48px)',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                HONEST <span style={{ color: '#eb1623', textShadow: '0 0 20px rgba(235, 22, 35, 0.4)' }}>INDIVIDUALS</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '14px' }}>
              Building Trust, Delivering Solutions. Premier Web Development, OWASP Offensive Security Validation, and Professional Career Guidance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="#eb1623" />
                <span>MSME: <strong>{BRAND_UDYAM}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} color="#eb1623" />
                <span>Base of Operations: <strong>{BRAND_LOCATION}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} color="#eb1623" />
                <span>{BRAND_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <button
                onClick={() => handleNav('services')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                Web & Mobile App Development
              </button>
              <button
                onClick={() => handleNav('cybersecurity')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                Offensive Cybersecurity Audits
              </button>
              <button
                onClick={() => handleNav('career-hub')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                ATS Resume & Career Counseling
              </button>
              <button
                onClick={() => handleNav('portfolio')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                All 6 Presentation Decks (44+ Slides)
              </button>
            </div>
          </div>

          {/* Col 3: Governance */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Governance</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                MSME Statutory Registration
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                35% Advance Milestone Model
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                NDA & Client PenTest Authorization
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: '#94a3b8', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = '#ff3344')}
                onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              >
                Project MD: Mr. Devesh Dhoble
              </button>
            </div>
          </div>

          {/* Col 4: Official Connect */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Official Channels</h4>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '14px' }}>
              Connect directly with our leadership team for project scoping, institutional workshops, or enterprise security audits.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.linkedin.com/company/honest-individuals/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077b5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg> LinkedIn
              </a>
              <a
                href="mailto:honestindividuals.info@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  background: 'rgba(235, 22, 35, 0.15)',
                  color: '#ff2a38',
                  fontSize: '0.78rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(235, 22, 35, 0.35)',
                }}
              >
                <Mail size={14} /> Email Us
              </a>
            </div>
          </div>

        </div>

        <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '0.76rem', color: '#64748b' }}>
          <div>
            © {new Date().getFullYear()} Honest Individuals (HI Group). All rights reserved. BHARAT.
          </div>
          <div>
            MSME Udyam Registration No: UDYAM-MP-13-0068161 • Sole Proprietor
          </div>
        </div>
      </div>
    </footer>
  );
}
