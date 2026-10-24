import React, { useState } from 'react';
import {
  Code2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Globe,
  Award,
  Building2,
  Fingerprint,
  CheckCircle2,
  Sparkles,
  Maximize2,
  FileText,
  Download
} from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import { PORTFOLIO_SLIDES } from '../data/presentationAssets';

export default function Hero({ onNavigate, onOpenContact }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openSlide = (idx = 0) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section
      style={{
        paddingTop: 'clamp(95px, 12vw, 130px)',
        paddingBottom: 'clamp(40px, 6vw, 70px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#090b0e',
        color: '#ffffff',
      }}
    >
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Ambient Crimson Tech Glow Orbs */}
      <div
        className="glow-orb"
        style={{
          top: '5%',
          left: '10%',
          width: 'min(450px, 80vw)',
          height: 'min(450px, 80vw)',
          background: 'rgba(235, 22, 35, 0.18)',
        }}
      />
      <div
        className="glow-orb"
        style={{
          top: '35%',
          right: '5%',
          width: 'min(500px, 80vw)',
          height: 'min(500px, 80vw)',
          background: 'rgba(184, 13, 23, 0.14)',
          animationDelay: '-6s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            MAIN HERO 2-COLUMN GRID (LEFT: BRANDING & ACTIONS | RIGHT: INTERACTIVE HERO SLIDE)
           ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(28px, 5vw, 48px)',
            alignItems: 'center',
            marginBottom: 'clamp(36px, 6vw, 56px)',
          }}
        >
          {/* LEFT COLUMN: HERO INFORMATION & ACTIONS */}
          <div>
            
            {/* Top Compact Trust Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(235, 22, 35, 0.14)',
                border: '1px solid rgba(235, 22, 35, 0.35)',
                color: '#ff3344',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              <ShieldCheck size={14} color="#eb1623" />
              <span>MSME Govt Registered • UDYAM-MP-13-0068161</span>
            </div>

            {/* Main Brand Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              HONEST <span style={{ color: '#eb1623', textShadow: '0 0 35px rgba(235, 22, 35, 0.45)' }}>INDIVIDUALS</span>
              <span style={{ display: 'block', fontSize: '0.45em', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '6px' }}>
                Group • Trusted Services in Bharat
              </span>
            </h1>

            {/* Tagline from Official Portfolio Slide 1 */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.12rem)',
                color: '#cbd5e1',
                lineHeight: 1.6,
                maxWidth: '620px',
                marginBottom: '24px',
              }}
            >
              At Honest Individuals (Hi), we operate with a lean and agile model that allows us to deliver <strong style={{ color: '#ffffff' }}>high-quality solutions at affordable pricing</strong>. No corporate overheads. Direct expert execution.
            </p>

            {/* Quick Feature Tickers */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
              {[
                'Web & Mobile App Engineering',
                'Offensive Security VAPT (OWASP)',
                'Career Counseling & ATS Hub',
                'Prime Contractor Network',
              ].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.78rem',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#e2e8f0',
                    fontWeight: 600,
                  }}
                >
                  ✓ {pill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => onNavigate('portfolio')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 25px rgba(235, 22, 35, 0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Browse All Presentation Decks</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('trust')}
                style={{
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: '#141822',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#eb1623';
                  e.currentTarget.style.background = '#1a202c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.background = '#141822';
                }}
              >
                <ShieldCheck size={16} color="#eb1623" />
                <span>Verify MSME & Contracts</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE HERO PRESENTATION SLIDE MOCKUP */}
          <div>
            <div
              onClick={() => openSlide(0)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(235, 22, 35, 0.35)',
                background: '#090b0e',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(235, 22, 35, 0.2)',
                aspectRatio: '16 / 9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/portfolio/1.png"
                alt="Honest Individuals Official Cover Slide"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <Maximize2 size={20} /> Click to Inspect Official Company Deck
              </div>
            </div>

            {/* Slide Navigation Teaser Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '12px',
                padding: '10px 14px',
                borderRadius: '10px',
                background: '#11141b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eb1623' }} />
                <span style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>
                  Official HI Deck • 7 Slides Verified
                </span>
              </div>
              <button
                onClick={() => openSlide(0)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ff2a38',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Launch Slideshow <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metric Callouts */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '14px',
          }}
        >
          {[
            { label: 'MSME Registration', val: 'UDYAM-MP-13-0068161', sub: 'Ministry of MSME Verified' },
            { label: 'Project Leadership', val: 'Devesh Dhoble', sub: 'Project Managing Director' },
            { label: 'Operational Model', val: 'Prime Contractors', sub: 'Strict Binding Agreement' },
            { label: 'Official Base', val: 'BHARAT', sub: 'honestindividuals.info@gmail.com' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#11141b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '14px',
              }}
            >
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                {item.val}
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={PORTFOLIO_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
