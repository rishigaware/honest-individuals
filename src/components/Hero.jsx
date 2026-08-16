import React, { useState } from 'react';
import {
  Code2,
  GraduationCap,
  CheckCircle2,
  Lock,
  Award,
  Building2,
  Shield,
  Sparkles,
  ArrowRight,
  Terminal,
  Zap,
  Globe,
  Cpu,
  Fingerprint
} from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import SpotlightCard from './SpotlightCard';

export default function Hero({ onOpenContact }) {
  const [activeConsoleTab, setActiveConsoleTab] = useState('security');

  return (
    <section style={{ paddingTop: 'clamp(85px, 10vw, 115px)', paddingBottom: 'clamp(40px, 5vw, 65px)', position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Ambient Morphing Glowing Orbs */}
      <div
        className="glow-orb"
        style={{
          top: '2%',
          left: '10%',
          width: 'min(400px, 80vw)',
          height: 'min(400px, 80vw)',
          background: 'rgba(37, 99, 235, 0.08)',
        }}
      />
      <div
        className="glow-orb"
        style={{
          top: '28%',
          right: '8%',
          width: 'min(420px, 80vw)',
          height: 'min(420px, 80vw)',
          background: 'rgba(124, 58, 237, 0.07)',
          animationDelay: '-6s',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* =========================================================================
            HEADER & TITLE BLOCK
           ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          
          {/* Top Announcement Pill */}
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <div
              className="announcement-pill"
              onClick={() => onOpenContact('General Inquiry')}
              style={{ padding: '5px 14px', fontSize: '0.74rem' }}
            >
              <span className="status-dot green" style={{ width: '6px', height: '6px' }} />
              <span style={{ fontSize: '0.74rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                MSME Registered • Certified CEH & CRTA
              </span>
              <span style={{ color: 'var(--border-medium)', fontSize: '0.72rem' }}>|</span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-body)' }}>
                Elite Tech & Security Firm
              </span>
              <ArrowRight size={12} color="var(--accent-primary)" />
            </div>
          </div>

          {/* Main Balanced Title */}
          <h1
            style={{
              fontSize: 'clamp(1.45rem, 2.8vw, 2.1rem)',
              fontWeight: 800,
              lineHeight: 1.22,
              marginBottom: '14px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-main)',
              letterSpacing: '-0.025em',
            }}
          >
            Engineering Digital Platforms, <br />
            <span className="gradient-text-cyan">Offensive Security</span> & <span className="gradient-text-purple">Career Futures</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto 24px auto',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: 'var(--text-main)' }}>Honest Individuals (HI Group)</strong> delivers enterprise-grade Custom Web & App Development, audit-ready OWASP Penetration Testing, and ATS-friendly Career Solutions without enterprise overhead.
          </p>

          {/* Action CTAs */}
          <div className="hero-ctas-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
            <button
              onClick={() => onNavigate ? onNavigate('services') : onOpenContact('Web Development')}
              className="btn-primary"
              style={{
                padding: '9px 18px',
                fontSize: '0.84rem',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
              }}
            >
              <Code2 size={15} /> Build Website or App
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('cybersecurity') : onOpenContact('Cybersecurity Audit')}
              className="btn-secondary"
              style={{
                padding: '9px 18px',
                fontSize: '0.84rem',
                color: 'var(--accent-purple)',
                borderColor: 'var(--accent-purple-border)',
              }}
            >
              <Lock size={15} /> Request Security Audit
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('career-hub') : onOpenContact('Career Counseling')}
              className="btn-secondary"
              style={{
                padding: '9px 16px',
                fontSize: '0.84rem',
                color: 'var(--accent-emerald)',
                borderColor: 'var(--accent-emerald-border)',
              }}
            >
              <GraduationCap size={15} color="var(--accent-emerald)" /> Career Growth Hub
            </button>
          </div>

          {/* Key Trust Guarantees */}
          <div
            className="hero-guarantees"
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px 16px',
              padding: '7px 16px',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9999px',
              boxShadow: 'var(--shadow-sm)',
              backdropFilter: 'blur(8px)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--text-body)',
              marginBottom: '32px',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <CheckCircle2 size={13} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> 35% Advance Token Model
            </span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <CheckCircle2 size={13} color="var(--accent-cyan)" style={{ flexShrink: 0 }} /> Formal NDA & Authorization
            </span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <CheckCircle2 size={13} color="var(--accent-purple)" style={{ flexShrink: 0 }} /> Executive MD Oversight
            </span>
          </div>

        </div>


        {/* =========================================================================
            CENTERPIECE: HOLOGRAPHIC CYBER & DEV ENGINE CONSOLE
           ========================================================================= */}
        <div style={{ position: 'relative', maxWidth: '940px', margin: '0 auto 40px auto', width: '100%' }}>
          
          {/* Responsive Satellite Pill Strip (Zero Overlap) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="satellite-pill" style={{ color: 'var(--accent-purple)', borderColor: 'var(--accent-purple-border)' }}>
              <Shield size={13} color="var(--accent-purple)" /> 100% Manual OWASP Testing
            </span>
            <span className="satellite-pill" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan-border)' }}>
              <Zap size={13} color="var(--accent-cyan)" /> Sub-50ms Fast Edge Performance
            </span>
            <span className="satellite-pill" style={{ color: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald-border)' }}>
              <Sparkles size={13} color="var(--accent-emerald)" /> ₹9,999 All-In-One Career Hub
            </span>
          </div>

          {/* Main Console Frame */}
          <div className="console-window">
            
            {/* Console Header Bar */}
            <div className="console-header">
              <div className="console-header-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="traffic-dot traffic-red" />
                  <span className="traffic-dot traffic-yellow" />
                  <span className="traffic-dot traffic-green" />
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginLeft: '6px' }}>
                    hi-engine-v2.8.4
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span className="status-dot green" style={{ width: '5px', height: '5px' }} />
                  <span style={{ fontSize: '0.66rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    SECURE LINK
                  </span>
                </div>
              </div>

              {/* Console Mode Switcher Tabs */}
              <div className="console-tabs-row">
                <button
                  onClick={() => setActiveConsoleTab('security')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    color: activeConsoleTab === 'security' ? '#ffffff' : '#94a3b8',
                    background: activeConsoleTab === 'security' ? '#7c3aed' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Lock size={11} /> PenTest Scope
                </button>

                <button
                  onClick={() => setActiveConsoleTab('web')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    color: activeConsoleTab === 'web' ? '#ffffff' : '#94a3b8',
                    background: activeConsoleTab === 'web' ? '#2563eb' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Cpu size={11} /> Web Engine
                </button>

                <button
                  onClick={() => setActiveConsoleTab('career')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '5px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    color: activeConsoleTab === 'career' ? '#ffffff' : '#94a3b8',
                    background: activeConsoleTab === 'career' ? '#059669' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <GraduationCap size={11} /> ATS Matrix
                </button>
              </div>
            </div>

            {/* Console Body with Live Laser Scanline */}
            <div className="scanline-container" style={{ padding: 'clamp(14px, 2.5vw, 22px)', background: '#090d16' }}>
              
              {/* TAB 1: OFFENSIVE SECURITY TERMINAL */}
              {activeConsoleTab === 'security' && (
                <div className="console-grid">
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <Terminal size={13} color="#c084fc" />
                      <span style={{ fontSize: '0.72rem', color: '#c084fc', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        OFFENSIVE PENETRATION TESTING SUITE (OWASP)
                      </span>
                    </div>

                    <pre
                      style={{
                        background: '#020617',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.68rem, 2vw, 0.74rem)',
                        fontFamily: 'var(--font-mono)',
                        color: '#93c5fd',
                        lineHeight: 1.5,
                        border: '1px solid #1e293b',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      <span style={{ color: '#6ee7b7' }}>[+] Target:</span> https://auth.client-network.com/api/v1{'\n'}
                      <span style={{ color: '#6ee7b7' }}>[+] Scope:</span> Business Logic, IDOR, BOLA, SQLi, Android APK{'\n'}
                      <span style={{ color: '#f59e0b' }}>[!] Vulnerability Discovered:</span> IDOR Privilege Escalation{'\n'}
                      <span style={{ color: '#f87171' }}>[!] Severity:</span> Critical (CVSS 9.4) • Exploitation Verified{'\n'}
                      <span style={{ color: '#34d399' }}>[✓] Status:</span> PoC Delivered → Zero-Day Patched & Audit Ready
                    </pre>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(124, 58, 237, 0.15)', color: '#c084fc', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                        OWASP Top 10
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                        Burp Suite Pro
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        JADX Android
                      </span>
                    </div>
                  </div>

                  {/* Right Telemetry Radar & Score Card */}
                  <div
                    style={{
                      background: '#0f172a',
                      borderRadius: '10px',
                      padding: '14px',
                      border: '1px solid #1e293b',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '10px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Security Verification Score
                      </div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a855f7', fontFamily: 'var(--font-heading)', margin: '2px 0' }}>
                        100%
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                        Zero automated false positives. Every vulnerability is manually validated with working PoCs.
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #1e293b', paddingTop: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '3px' }}>
                        <span>NDA Compliance:</span>
                        <span style={{ color: '#34d399', fontWeight: 700 }}>Enforced</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' }}>
                        <span>Authorization Scope:</span>
                        <span style={{ color: '#38bdf8', fontWeight: 700 }}>Full Indemnity</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FULL-STACK WEB ENGINE */}
              {activeConsoleTab === 'web' && (
                <div className="console-grid">
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <Code2 size={13} color="#38bdf8" />
                      <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        HIGH-PERFORMANCE APPLICATION ARCHITECTURE
                      </span>
                    </div>

                    <pre
                      style={{
                        background: '#020617',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.68rem, 2vw, 0.74rem)',
                        fontFamily: 'var(--font-mono)',
                        color: '#bae6fd',
                        lineHeight: 1.5,
                        border: '1px solid #1e293b',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      <span style={{ color: '#c084fc' }}>import</span> {'{'} createServerApp {'}'} <span style={{ color: '#c084fc' }}>from</span> <span style={{ color: '#86efac' }}>'@hi/core'</span>;{'\n\n'}
                      <span style={{ color: '#60a5fa' }}>export async function</span> <span style={{ color: '#fde047' }}>deployEnterprisePlatform</span>(config) {'{\n'}
                      {'  '}<span style={{ color: '#c084fc' }}>await</span> <span style={{ color: '#fde047' }}>enforceSecurityGuards</span>(config.owaspProfile);{'\n'}
                      {'  '}<span style={{ color: '#c084fc' }}>return</span> <span style={{ color: '#60a5fa' }}>new</span> <span style={{ color: '#fde047' }}>EdgeCluster</span>({'{'} ssl: <span style={{ color: '#34d399' }}>true</span>, speed: <span style={{ color: '#38bdf8' }}>'Sub-50ms'</span> {'}'});{'\n'}
                      {'}'}
                    </pre>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(37, 99, 235, 0.15)', color: '#60a5fa', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                        React 19 & Vite
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        Node.js & Express
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(234, 179, 8, 0.15)', color: '#fde047', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                        REST / GraphQL
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(244, 63, 94, 0.15)', color: '#fb7185', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                        Encrypted Payments
                      </span>
                    </div>
                  </div>

                  {/* Right Telemetry Card */}
                  <div
                    style={{
                      background: '#0f172a',
                      borderRadius: '10px',
                      padding: '14px',
                      border: '1px solid #1e293b',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '10px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Performance & Latency
                      </div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-heading)', margin: '2px 0' }}>
                        18 ms
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                        Ultra-fast global Edge delivery with 99.9% uptime SLA and responsive mobile ergonomics.
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #1e293b', paddingTop: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '3px' }}>
                        <span>Lighthouse Score:</span>
                        <span style={{ color: '#34d399', fontWeight: 700 }}>99 / 100</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' }}>
                        <span>Dev Lifecycle:</span>
                        <span style={{ color: '#60a5fa', fontWeight: 700 }}>Agile 8-10 Weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: ATS CAREER MATRIX */}
              {activeConsoleTab === 'career' && (
                <div className="console-grid">
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <GraduationCap size={13} color="#34d399" />
                      <span style={{ fontSize: '0.72rem', color: '#34d399', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        ATS RESUME & CAREER ACCELERATION MATRIX
                      </span>
                    </div>

                    <pre
                      style={{
                        background: '#020617',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.68rem, 2vw, 0.74rem)',
                        fontFamily: 'var(--font-mono)',
                        color: '#a7f3d0',
                        lineHeight: 1.5,
                        border: '1px solid #1e293b',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      <span style={{ color: '#6ee7b7' }}>[✓] ATS Parsing Match:</span> 98.4% (Taleo, Greenhouse, Workday){'\n'}
                      <span style={{ color: '#6ee7b7' }}>[✓] LinkedIn Profile Visibility:</span> +340% Recruiter Inquiries{'\n'}
                      <span style={{ color: '#6ee7b7' }}>[✓] Career Report:</span> Personality Analysis & Skill Match Roadmap{'\n'}
                      <span style={{ color: '#fde047' }}>[★] Mentorship:</span> 1-on-1 Direct Guidance with MD Devesh Dhoble{'\n'}
                      <span style={{ color: '#38bdf8' }}>[💎] All-In-One Package:</span> ₹9,999 (Valued at ₹11,500)
                    </pre>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        ATS Optimization
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(37, 99, 235, 0.15)', color: '#60a5fa', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                        LinkedIn Revamp
                      </span>
                      <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', padding: '2px 6px', borderRadius: '4px', background: 'rgba(234, 179, 8, 0.15)', color: '#fde047', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
                        Interview Coaching
                      </span>
                    </div>
                  </div>

                  {/* Right Telemetry Card */}
                  <div
                    style={{
                      background: '#0f172a',
                      borderRadius: '10px',
                      padding: '14px',
                      border: '1px solid #1e293b',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '10px',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        ATS Recruiter Match Rate
                      </div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-heading)', margin: '2px 0' }}>
                        98.4%
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                        Passes AI keyword filters and puts your profile directly in hiring manager inboxes.
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #1e293b', paddingTop: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '3px' }}>
                        <span>Callback Rate:</span>
                        <span style={{ color: '#34d399', fontWeight: 700 }}>3.4x Higher</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' }}>
                        <span>Delivery Turnaround:</span>
                        <span style={{ color: '#38bdf8', fontWeight: 700 }}>3-5 Business Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>


        {/* =========================================================================
            RECOGNITIONS & ACKNOWLEDGMENTS SHOWCASE
           ========================================================================= */}
        <div style={{ paddingTop: '10px' }}>
          <div style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '14px' }}>
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
              { title: 'U.S. HHS', desc: 'Health & Human', icon: <Shield size={15} color="var(--accent-purple)" /> },
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


        {/* =========================================================================
            LIVE METRICS GRID
           ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '14px',
            marginTop: '24px',
          }}
        >
          <SpotlightCard
            className="panel-padding"
            style={{ borderLeft: '4px solid var(--accent-cyan)', cursor: 'pointer' }}
            onClick={() => onNavigate && onNavigate('cybersecurity')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.55rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                100%
              </div>
              <div style={{ padding: '6px', borderRadius: '7px', background: 'var(--accent-cyan-light)', color: 'var(--accent-cyan)' }}>
                <Shield size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent-cyan)', marginTop: '4px' }}>
              Manual OWASP Security Verification
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
              Zero-compromise manual penetration testing across Web, API, and Android platforms with real exploit PoCs.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="panel-padding"
            style={{ borderLeft: '4px solid var(--accent-purple)', cursor: 'pointer' }}
            onClick={() => onNavigate && onNavigate('services')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.55rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                52 Weeks
              </div>
              <div style={{ padding: '6px', borderRadius: '7px', background: 'var(--accent-purple-light)', color: 'var(--accent-purple)' }}>
                <Code2 size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent-purple)', marginTop: '4px' }}>
              Enterprise & Custom Dev Capabilities
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
              From rapid 8-10 week web deployments to year-long full-scale application engineering contracts.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="panel-padding"
            style={{ borderLeft: '4px solid var(--accent-emerald)', cursor: 'pointer' }}
            onClick={() => onNavigate && onNavigate('career-hub')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.55rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                ₹9,999
              </div>
              <div style={{ padding: '6px', borderRadius: '7px', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)' }}>
                <Sparkles size={16} />
              </div>
            </div>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--accent-emerald)', marginTop: '4px' }}>
              Premium Career Success Package
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.5 }}>
              Includes Counseling Report, ATS Resume, LinkedIn Optimization & Interview Mentorship (Valued at ₹11,500).
            </p>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
