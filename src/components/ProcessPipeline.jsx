import React, { useState, useEffect } from 'react';
import {
  Compass,
  Cpu,
  ShieldCheck,
  FileCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Sparkles,
  Lock
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ProcessPipeline({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const steps = [
    {
      num: '01',
      title: 'Conscious Scoping & Zero-Waste Audit',
      subtitle: 'Eliminating agency overhead with direct Project MD architecture.',
      icon: <Compass size={22} color="#eb1623" />,
      tag: 'Lean Scoping',
      accentColor: '#eb1623',
      metrics: '100% Direct Lead • 0% Middleman Bloat',
      description:
        'Direct consultation with Founder & Project MD Mr. Devesh Dhoble. We strip away agency bloat, unneeded subscriptions, and vague deliverables to define an exact, transparent scope before writing a single line of code.',
      highlights: [
        'Direct MD consultation and rapid sprint scoping',
        'Transparent milestone pricing with no hidden charges',
        'Zero-waste compute and cloud budget planning',
        'Official scope authorization & NDA signing',
      ],
      deliverable: 'Scope Specification & Transparent Milestone Roadmap',
    },
    {
      num: '02',
      title: 'High-Efficiency Architecture & Full-Stack Sprints',
      subtitle: 'Modular engineering designed for speed and low carbon cloud compute.',
      icon: <Cpu size={22} color="#B08774" />,
      tag: 'Eco Architecture',
      accentColor: '#B08774',
      metrics: 'Sub-2s Load Times • Minimal Server Payload',
      description:
        'Battle-tested modern stacks (React, Vite, Node.js, Python, PostgreSQL) designed for optimal execution efficiency. Lean bundling and efficient caching drastically reduce server energy consumption and deliver instantaneous mobile responsiveness.',
      highlights: [
        'Component design system with reusable Figma tokens',
        'Microservices and optimized database schema design',
        'Sub-2 second Largest Contentful Paint (LCP) benchmark',
        'Automated CI/CD linting and test coverage checks',
      ],
      deliverable: 'Production-Ready Source Code & Staging Environment',
    },
    {
      num: '03',
      title: 'Offensive Security & Zero-Trust Hardening',
      subtitle: 'Pre-launch penetration testing covering OWASP Top 10 vulnerabilities.',
      icon: <Lock size={22} color="#9B6552" />,
      tag: 'VAPT Validation',
      accentColor: '#9B6552',
      metrics: 'OWASP Verified • Proof of Concept (PoC) Ledger',
      description:
        'Unlike agencies that ship code without security validation, every Honest Individuals delivery undergoes rigorous offensive ethical testing. We audit authentication barriers, API parameters, and mobile binaries to eliminate vulnerabilities prior to release.',
      highlights: [
        'Web application & API vulnerability assessment (VAPT)',
        'BOLA, IDOR, and business logic bypass elimination',
        'Android binary decompilation & secret key sanitization',
        'Developer remediation sessions with working exploit PoCs',
      ],
      deliverable: 'Comprehensive Security Audit Report & PoC Fix Verification',
    },
    {
      num: '04',
      title: 'Statutory Verification & Legal Compliance',
      subtitle: 'Official Govt of India MSME registration with binding legal contracts.',
      icon: <FileCheck size={22} color="#CECEC4" />,
      tag: 'Statutory Trust',
      accentColor: '#CECEC4',
      metrics: 'UDYAM-MP-13-0068161 • Legally Enforced',
      description:
        'Operating with absolute statutory transparency under Ministry of MSME, Government of India. Our Prime Contractor network is bound by master collaboration agreements, 12-month non-circumvention clauses, and client NDA protections.',
      highlights: [
        'Ministry of MSME Udyam statutory verification certificate',
        'Formal client project authorization and legal safe harbor',
        'Prime contractor warranty and milestone SLA agreements',
        'Direct institutional banking compliance and tax receipts',
      ],
      deliverable: 'Legally Binding Warranty & Statutory Compliance Packet',
    },
    {
      num: '05',
      title: 'Scalable Edge Deployment & Ongoing Maintenance',
      subtitle: 'High-availability global distribution with SLA-backed support.',
      icon: <Rocket size={22} color="#eb1623" />,
      tag: 'Global Edge',
      accentColor: '#eb1623',
      metrics: '99.9% High Availability • Rapid Rollback Pipeline',
      description:
        'Zero-downtime containerized production releases distributed across global edge CDNs. Includes automated real-time health monitoring, regular security patches, and direct developer support to ensure long-term stability.',
      highlights: [
        'Global edge CDN routing with DDoS mitigation protocols',
        'Automated daily database backups with encryption at rest',
        'Performance metric dashboards and error tracking',
        'Rapid response SLA for updates, fixes, and feature additions',
      ],
      deliverable: 'Live Production System & Continuous Maintenance SLA',
    },
  ];

  // Pause auto-rotation when user interacts with steps
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, steps.length]);

  const current = steps[activeStep];

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0C0C0B 0%, #121312 50%, #0C0C0B 100%)',
        padding: 'clamp(50px, 8vw, 90px) 0',
        borderTop: '1px solid rgba(206, 206, 196, 0.08)',
        borderBottom: '1px solid rgba(206, 206, 196, 0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Lifeflow Earthen Glow Accents */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(155, 101, 82, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 22, 35, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header with Lifeflow Aesthetic */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(32px, 5vw, 54px) auto' }}>
          <div
            className="wf-float-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, rgba(155, 101, 82, 0.16) 0%, rgba(176, 135, 116, 0.1) 100%)',
              border: '1px solid rgba(176, 135, 116, 0.35)',
              color: '#CECEC4',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Leaf size={14} color="#B08774" />
            <span>Sustainable & Conscious Engineering Process</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            How We Build:{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #CECEC4 40%, #B08774 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Zero-Waste, Full-Transparency
            </span>{' '}
            Lifecycle
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.88rem, 1.3vw, 0.98rem)',
              color: '#C5C5BB',
              lineHeight: 1.65,
              margin: '0 auto',
            }}
          >
            Inspired by lean, eco-conscious systems engineering, our 5-phase delivery process eliminates agency cost bloat, optimizes cloud energy efficiency, and enforces verifiable cybersecurity benchmarks from day one.
          </p>
        </div>

        {/* =========================================================================
            INTERACTIVE PROGRESS TIMELINE BAR (STEP SELECTORS)
           ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '12px',
            marginBottom: '32px',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.num}
                onClick={() => {
                  setActiveStep(idx);
                  setAutoPlay(false);
                }}
                style={{
                  background: isActive
                    ? 'linear-gradient(145deg, #181a18 0%, #121312 100%)'
                    : '#111211',
                  border: isActive
                    ? `1.5px solid ${step.accentColor}`
                    : '1px solid rgba(206, 206, 196, 0.1)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive
                    ? `0 12px 28px rgba(0, 0, 0, 0.6), 0 0 20px ${step.accentColor}25`
                    : 'none',
                  transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Active Top Glow Line */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${step.accentColor}, #CECEC4)`,
                    }}
                  />
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: isActive ? step.accentColor : '#654E42',
                      background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    STEP {step.num}
                  </span>
                  <div style={{ opacity: isActive ? 1 : 0.6, transform: isActive ? 'scale(1.1)' : 'scale(1)', transition: 'all 0.2s ease' }}>
                    {step.icon}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: isActive ? '#ffffff' : '#C5C5BB',
                    lineHeight: 1.35,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {step.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            ACTIVE STEP DEEP DIVE SPOTLIGHT DISPLAY
           ========================================================= */}
        <SpotlightCard
          style={{
            background: '#111211',
            border: `1px solid rgba(206, 206, 196, 0.15)`,
            borderRadius: '16px',
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.75)',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(24px, 4vw, 44px)',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Stage Explanation & Highlights */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span
                  style={{
                    background: current.accentColor,
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  PHASE {current.num} OF 05
                </span>
                <span
                  style={{
                    color: '#CECEC4',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  {current.tag}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}
              >
                {current.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#C5C5BB',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                }}
              >
                {current.description}
              </p>

              {/* Specific Methodology Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {current.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color={current.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', color: '#CECEC4', lineHeight: 1.5 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => onOpenContact && onOpenContact(current.title)}
                  className="btn-primary"
                  style={{
                    fontSize: '0.84rem',
                    padding: '10px 20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Initiate This Phase With MD <ArrowRight size={15} />
                </button>
                <div style={{ fontSize: '0.78rem', color: '#9E9E94', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} color="#B08774" />
                  <span>{current.metrics}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Deliverable Badge Card */}
            <div>
              <div
                style={{
                  background: 'linear-gradient(145deg, #181918 0%, #0e0f0e 100%)',
                  borderRadius: '14px',
                  border: '1px solid rgba(206, 206, 196, 0.12)',
                  padding: '24px',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 16px 36px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <span style={{ fontSize: '0.76rem', color: '#B08774', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Core Deliverable Benchmark
                  </span>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 10px #10b981',
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '14px',
                    lineHeight: 1.4,
                  }}
                >
                  {current.deliverable}
                </div>

                <div
                  style={{
                    background: '#0c0d0c',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '14px',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: '#654E42', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                    Audit & Compliance Level
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#CECEC4', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={14} color="#eb1623" />
                    <span>Statutory Safe Harbor & Master SLA Enforced</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#9E9E94' }}>Turnaround</div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff' }}>Rapid 1-2 Weeks</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#9E9E94' }}>Engagement</div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff' }}>Milestone-Backed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </div>
  );
}
