import React from 'react';

export default function Footer({ onSelectTab }) {
  const handleNav = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };

  return (
    <footer style={{ background: '#ffffff', borderTop: '1px solid var(--border-subtle)', padding: 'clamp(32px, 5vw, 45px) 0 20px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '28px', marginBottom: '28px' }}>
          
          {/* Col 1: Brand */}
          <div>
            <div
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer' }}
            >
              <img
                src="/logo.png"
                alt="Honest Individuals Logo"
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.02rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                HONEST INDIVIDUALS
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '10px' }}>
              Building Trust, Delivering Solutions. Premier Web Development, OWASP Offensive Security Validation, and Career Development.
            </p>
            <div style={{ fontSize: '0.74rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Sole Proprietorship • MSME Udyam Verified
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>Solutions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <button
                onClick={() => handleNav('services')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                Web & Mobile App Development
              </button>
              <button
                onClick={() => handleNav('cybersecurity')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                Offensive Cybersecurity Audits
              </button>
              <button
                onClick={() => handleNav('career-hub')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                ATS Resume & Career Counseling
              </button>
              <button
                onClick={() => handleNav('portfolio')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                Client Case Studies & Outcomes
              </button>
            </div>
          </div>

          {/* Col 3: Governance */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>Governance</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                MSME Statutory Registration
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                35% Advance Engagement Model
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                NDA & Client PenTest Authorization
              </button>
              <button
                onClick={() => handleNav('trust')}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.82rem', cursor: 'pointer', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text-main)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                Executive MD Oversight (Mr. Devesh Dhoble)
              </button>
            </div>
          </div>

          {/* Col 4: Recognized Credentials */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>Recognized By</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Ethical hacking credentials recognized and acknowledged by IBM, U.S. Dept of Health & Human Services (HHS), NCIIPC, Cambridge University, and Google.
            </p>
          </div>

        </div>

        <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', fontSize: '0.76rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Honest Individuals (HI Group). All rights reserved.
          </div>
          <div>
            Built with precision and integrity for Honest Individuals.
          </div>
        </div>
      </div>
    </footer>
  );
}
