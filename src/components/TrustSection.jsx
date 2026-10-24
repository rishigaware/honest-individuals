import React, { useState } from 'react';
import {
  FileCheck,
  Landmark,
  Lock,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Maximize2,
  ExternalLink,
  Award,
  Users2,
  BadgeCheck
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import { MSME_ASSETS, CLIENT_LETTERS } from '../data/presentationAssets';

export default function TrustSection({ onOpenContact }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openDocumentLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="trust" className="section-padding" style={{ position: 'relative', background: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span className="badge badge-rose" style={{ marginBottom: '12px' }}>
            <ShieldCheck size={13} /> Trust & Statutory Verification
          </span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.85rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
            Built on <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>Verifiable Proof</span> & Statutory Compliance
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
            At Honest Individuals (HI Group), we operate under complete transparency. Every project is anchored by official Government of India MSME registration, binding client authorization letters, and formal NDAs.
          </p>
        </div>

        {/* 3 Core Trust Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {/* Card 1: MSME Verification */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid #eb1623', background: 'var(--bg-surface)' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623', display: 'inline-block', marginBottom: '16px' }}>
              <Landmark size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              MSME Govt Registered Firm
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              Honest Individuals is officially registered under the Ministry of Micro, Small and Medium Enterprises (MSME - Government of India).
            </p>
            <div style={{ background: 'rgba(235, 22, 35, 0.1)', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', border: '1px solid rgba(235, 22, 35, 0.25)' }}>
              <div style={{ fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600, textTransform: 'uppercase' }}>Udyam Registration Number</div>
              <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ff2a38', fontFamily: 'var(--font-mono)', marginTop: '2px', textShadow: '0 0 15px rgba(235, 22, 35, 0.4)' }}>
                UDYAM-MP-13-0068161
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Ministry of MSME Portal Authenticated</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Direct Bank Account Routing / No Cash</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: 35% Advance & Contract Protection */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid #ff2a38', background: 'var(--bg-surface)' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(235, 22, 35, 0.12)', color: '#ff2a38', display: 'inline-block', marginBottom: '16px' }}>
              <FileCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              35% Advance Milestone Model
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              To commence engineering and allocate dedicated development or penetration testing squads, projects operate on an initial 35% advance schedule.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 500, marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Formal Project Authorization Letters</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Master Freelance Collaboration Agreement</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Defined 8-10 or 52-Week Deliverables</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: PenTest Authorization & NDA */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid #eb1623', background: 'var(--bg-surface)' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623', display: 'inline-block', marginBottom: '16px' }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              Ethical PenTest Safe Harbor
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              All offensive security assessments strictly adhere to written client authorization. We do not engage in non-consensual testing and execute binding NDAs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 500, marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Blackbox, Graybox & Whitebox Scopes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Legal Indemnity & Non-Disclosure Terms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="#eb1623" style={{ flexShrink: 0 }} /> <span>Confidential Vulnerability Reporting</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* =========================================================================
            REAL EVIDENCE DOCUMENTS & CERTIFICATES SHOWCASE
           ========================================================================= */}
        <div
          style={{
            background: '#11141b',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: 'clamp(20px, 4vw, 36px)',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.7)',
            marginBottom: '36px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '6px' }}>
                <FileText size={12} /> Verified Documentation
              </span>
              <h3 style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', fontWeight: 800, color: '#ffffff' }}>
                Official MSME Certificate & Client Authorization Letters
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                Click on any document below to inspect the verified official letters and portal screenshots in high resolution.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '20px',
            }}
          >
            {/* MSME Udyam Document */}
            <div
              onClick={() => openDocumentLightbox(MSME_ASSETS, 0)}
              style={{
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#eb1623';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(235, 22, 35, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '180px', background: '#090b0e', overflow: 'hidden' }}>
                <img
                  src="/assets/msme/screenshot_04.png"
                  alt="MSME Udyam Registration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#eb1623',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  Govt Certificate
                </span>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Maximize2 size={24} />
                </div>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  MSME Udyam Registration
                </h4>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#ff2a38', fontWeight: 700, marginBottom: '6px' }}>
                  UDYAM-MP-13-0068161
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Ministry of MSME official portal submission and verified sole proprietorship record.
                </p>
              </div>
            </div>

            {/* Client Letter 1: Corporate Business Website */}
            <div
              onClick={() => openDocumentLightbox(CLIENT_LETTERS, 0)}
              style={{
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#eb1623';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(235, 22, 35, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '180px', background: '#090b0e', overflow: 'hidden' }}>
                <img
                  src="/assets/client/letter_main.png"
                  alt="Corporate Website Authorization"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#eb1623',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  Client Authorization
                </span>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Maximize2 size={24} />
                </div>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Corporate Web Platform Auth
                </h4>
                <div style={{ fontSize: '0.78rem', color: '#ff2a38', fontWeight: 600, marginBottom: '6px' }}>
                  Director Tausuk Joshi • 8-10 Wks
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Full-scope web design, development, CMS integration, and security authorization.
                </p>
              </div>
            </div>

            {/* Client Letter 2: 52-Week App Dev (35% Advance) */}
            <div
              onClick={() => openDocumentLightbox(CLIENT_LETTERS, 1)}
              style={{
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#eb1623';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(235, 22, 35, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '180px', background: '#090b0e', overflow: 'hidden' }}>
                <img
                  src="/assets/client/letter_2.png"
                  alt="Application Development Authorization"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#eb1623',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  App Dev Agreement
                </span>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Maximize2 size={24} />
                </div>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  52-Week Application Auth
                </h4>
                <div style={{ fontSize: '0.78rem', color: '#ff2a38', fontWeight: 600, marginBottom: '6px' }}>
                  Director Ashish Tiwari • 35% Advance
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Application development authorization with agreed 35% advance milestone structure.
                </p>
              </div>
            </div>

            {/* Client Letter 3: PenTest VAPT Authorization */}
            <div
              onClick={() => openDocumentLightbox(CLIENT_LETTERS, 2)}
              style={{
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#eb1623';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(235, 22, 35, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '180px', background: '#090b0e', overflow: 'hidden' }}>
                <img
                  src="/assets/client/1774022801149_pages-to-jpg-0001.jpg"
                  alt="Penetration Testing Authorization"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: '#eb1623',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  VAPT Legal Scope
                </span>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Maximize2 size={24} />
                </div>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Penetration Testing Scope
                </h4>
                <div style={{ fontSize: '0.78rem', color: '#ff2a38', fontWeight: 600, marginBottom: '6px' }}>
                  OWASP Scope • Legal Indemnity
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Written authorization for Web, API, and Android ethical hacking vulnerability audits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRIME CONTRACTOR & SOLE PROPRIETOR NETWORK ARCHITECTURE
           ========================================================================= */}
        <div
          style={{
            background: '#0d111c',
            borderRadius: '16px',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            padding: 'clamp(20px, 4vw, 32px)',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                fontSize: '0.74rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
              }}
            >
              Statutory Structure
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
              Sole Proprietorship & Prime Contractor Network
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Project Managing Director <strong>Mr. Devesh Dhoble</strong> orchestrates operations through verified prime contractors and specialized subcontractors. Every contributor signs the omnibus <em>HI Group Contractor Verification & Master Binding Sheet</em> with strict 12-month non-circumvention, post-exit liability, and zero-cash payout compliance.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.74rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                ✓ Pay-When-Paid Policy
              </span>
              <span style={{ fontSize: '0.74rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                ✓ Zero Cash Policy (Direct RTGS/UPI)
              </span>
              <span style={{ fontSize: '0.74rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                ✓ 12-Month Non-Circumvention
              </span>
            </div>
          </div>

          {/* Thumbnail preview of Organization Deck Slide 6 & 7 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '12px' }}>
            <div
              onClick={() => openDocumentLightbox(PORTFOLIO_SLIDES, 5)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#000',
              }}
            >
              <img src="/assets/portfolio/6.png" alt="HI Group Organization Chart" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '6px 8px', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600 }}>
                Slide 6: Team Hierarchy
              </div>
            </div>

            <div
              onClick={() => openDocumentLightbox(PORTFOLIO_SLIDES, 6)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#000',
              }}
            >
              <img src="/assets/portfolio/7.png" alt="Sole Proprietorship Structure" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '6px 8px', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600 }}>
                Slide 7: Prime Contractors
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox for zooming */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
