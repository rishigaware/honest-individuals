import React, { useEffect, useRef } from 'react';
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
  Sparkles
} from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import ArchitectureStack from './ArchitectureStack';
import SpotlightCard from './SpotlightCard';

export default function Hero({ onNavigate, onOpenContact }) {
  const heroContainerRef = useRef(null);

  // Scroll Reveal Observer for Smooth Sliding Animations on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={heroContainerRef}
      style={{
        paddingTop: 'clamp(85px, 10vw, 110px)',
        paddingBottom: 'clamp(40px, 6vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
        background: '#f8fafc',
      }}
    >
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Ambient Radial Glowing Orbs */}
      <div
        className="glow-orb"
        style={{
          top: '5%',
          left: '12%',
          width: 'min(420px, 80vw)',
          height: 'min(420px, 80vw)',
          background: 'rgba(37, 99, 235, 0.07)',
        }}
      />
      <div
        className="glow-orb"
        style={{
          top: '32%',
          right: '8%',
          width: 'min(450px, 80vw)',
          height: 'min(450px, 80vw)',
          background: 'rgba(124, 58, 237, 0.06)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: '5%',
          left: '35%',
          width: 'min(380px, 70vw)',
          height: 'min(380px, 70vw)',
          background: 'rgba(16, 185, 129, 0.05)',
          animationDelay: '-10s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            MAIN HERO 2-COLUMN GRID (LEFT: CONTENT & CARDS | RIGHT: 3D ARCHITECTURE)
           ========================================================================= */}
        <div className="hero-redesign-grid scroll-reveal is-visible" style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          
          {/* LEFT COLUMN: HERO INFORMATION & ACTIONS */}
          <div>
            
            {/* Top Compact Trust Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <div
                className="announcement-pill"
                onClick={() => onNavigate ? onNavigate('trust') : onOpenContact('Trust & Governance')}
                style={{
                  padding: '5px 14px',
                  fontSize: '0.74rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  background: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                <span className="status-dot-pulse" />
                <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>
                  MSME Registered
                </span>
                <span style={{ color: 'var(--border-medium)' }}>•</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                  Certified CEH & CRTA
                </span>
                <span style={{ color: 'var(--border-medium)' }}>•</span>
                <span style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>
                  Security-Focused
                </span>
              </div>
            </div>

            {/* Main Balanced Heading */}
            <h1
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '14px',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-main)',
                letterSpacing: '-0.025em',
              }}
            >
              Engineering Digital Platforms, <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Security That Scales.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: '22px',
              }}
            >
              We build high-performance digital platforms, secure applications, and career-focused technology solutions designed for modern businesses.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '26px',
              }}
            >
              <button
                onClick={() => onNavigate ? onNavigate('services') : onOpenContact('Web Development')}
                className="btn-primary"
                style={{
                  padding: '10px 20px',
                  fontSize: '0.86rem',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                Build Your Platform <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onNavigate ? onNavigate('cybersecurity') : onOpenContact('Cybersecurity Audit')}
                className="btn-secondary"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.86rem',
                  color: 'var(--accent-purple)',
                  borderColor: 'var(--accent-purple-border)',
                }}
              >
                <Lock size={14} /> Request Security Audit
              </button>

              <button
                onClick={() => onNavigate ? onNavigate('career-hub') : onOpenContact('Career Counseling')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-emerald)',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 8px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
              >
                Explore Career Hub <ArrowRight size={13} />
              </button>
            </div>

            {/* Live System Operational Indicator */}
            <div style={{ marginBottom: '22px' }}>
              <div className="live-system-status">
                <span className="status-dot-pulse" />
                <span>SYSTEM STATUS: OPERATIONAL</span>
                <span style={{ color: '#86efac' }}>•</span>
                <span style={{ color: '#166534', fontWeight: 600 }}>Security Monitoring Active</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D FLOATING DIGITAL ARCHITECTURE VISUALIZATION */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ArchitectureStack onNavigate={onNavigate} />
          </div>

        </div>


        {/* =========================================================================
            INTERACTIVE CAPABILITY CARDS (01, 02, 03) WITH SMOOTH SCROLL REVEAL
           ========================================================================= */}
        <div
          className="scroll-reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '14px',
            marginBottom: '26px',
          }}
        >
          {/* Card 01: Digital Engineering */}
          <div
            className="capability-card"
            onClick={() => onNavigate ? onNavigate('services') : onOpenContact('Web Development')}
            style={{ borderLeft: '3px solid var(--accent-primary)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                <span style={{ color: 'var(--text-dim)', fontWeight: 700 }}>01</span> <span style={{ marginLeft: '4px' }}>DIGITAL ENGINEERING</span>
              </div>
              <div className="capability-icon" style={{ padding: '6px', borderRadius: '8px', background: 'var(--accent-primary-light)', color: 'var(--accent-primary)' }}>
                <Code2 size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              Custom Web & App Development
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '8px' }}>
              React 19, Next.js, Node.js microservices, encrypted payments, and ultra-fast edge delivery.
            </p>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Dev Services <ArrowRight size={11} />
            </div>
          </div>

          {/* Card 02: Cyber Security */}
          <div
            className="capability-card"
            onClick={() => onNavigate ? onNavigate('cybersecurity') : onOpenContact('Cybersecurity Audit')}
            style={{ borderLeft: '3px solid var(--accent-purple)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                <span style={{ color: 'var(--text-dim)', fontWeight: 700 }}>02</span> <span style={{ marginLeft: '4px' }}>CYBER SECURITY</span>
              </div>
              <div className="capability-icon" style={{ padding: '6px', borderRadius: '8px', background: 'var(--accent-purple-light)', color: 'var(--accent-purple)' }}>
                <Lock size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              OWASP Security Testing & VAPT
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '8px' }}>
              Zero automated false positives. Manual Web, API, and Android penetration testing with verified PoCs.
            </p>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-purple)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Explore PenTest Scope <ArrowRight size={11} />
            </div>
          </div>

          {/* Card 03: Career Technology */}
          <div
            className="capability-card"
            onClick={() => onNavigate ? onNavigate('career-hub') : onOpenContact('Career Counseling')}
            style={{ borderLeft: '3px solid var(--accent-emerald)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                <span style={{ color: 'var(--text-dim)', fontWeight: 700 }}>03</span> <span style={{ marginLeft: '4px' }}>CAREER TECHNOLOGY</span>
              </div>
              <div className="capability-icon" style={{ padding: '6px', borderRadius: '8px', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)' }}>
                <Sparkles size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              Career Growth & ATS Matrix
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '8px' }}>
              ATS resume revamps, recruiter optimization, and 1-on-1 mentorship with MD Devesh Dhoble.
            </p>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Calculate Package <ArrowRight size={11} />
            </div>
          </div>
        </div>


        {/* =========================================================================
            HORIZONTAL TRUST STRIP WITH SCROLL REVEAL
           ========================================================================= */}
        <div
          className="scroll-reveal scroll-reveal-delay-1"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px 20px',
            padding: '10px 20px',
            background: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--text-body)',
            marginBottom: '32px',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="var(--accent-emerald)" /> Formal Mutual NDA
          </span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="var(--accent-purple)" /> OWASP Security Testing
          </span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="var(--accent-cyan)" /> Enterprise-Grade Architecture
          </span>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={14} color="var(--accent-primary)" /> Sub-50ms Fast Edge Performance
          </span>
        </div>


        {/* =========================================================================
            OFFICIALLY RECOGNIZED CREDENTIALS WITH SCROLL REVEAL
           ========================================================================= */}
        <div className="scroll-reveal scroll-reveal-delay-2">
          <div style={{ textAlign: 'center', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px' }}>
            Recognized & Officially Acknowledged Credentials
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            {[
              { title: 'IBM', desc: 'Acknowledged', icon: <Fingerprint size={15} color="var(--accent-primary)" /> },
              { title: 'U.S. HHS', desc: 'Health & Human', icon: <ShieldCheck size={15} color="var(--accent-purple)" /> },
              { title: 'NCIIPC', desc: 'Critical Infra', icon: <Lock size={15} color="var(--accent-emerald)" /> },
              { title: 'Cambridge Univ.', desc: 'Recognition', icon: <Award size={15} color="var(--accent-cyan)" /> },
              { title: 'Google', desc: 'Platform Verified', icon: <Globe size={15} color="var(--accent-amber)" /> },
              { title: 'MSME Bharat', desc: 'Govt Registered', icon: <Building2 size={15} color="var(--accent-rose)" /> }
            ].map((item, idx) => (
              <SpotlightCard
                key={idx}
                style={{
                  padding: '12px 10px',
                  textAlign: 'center',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2px',
                }}
              >
                <div style={{ marginBottom: '2px' }}>{item.icon}</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.66rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {item.desc}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
