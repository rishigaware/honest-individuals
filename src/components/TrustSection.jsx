import React from 'react';
import { FileCheck, Landmark, Lock, CheckCircle2, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function TrustSection({ onOpenContact }) {
  return (
    <section id="trust" className="section-padding" style={{ position: 'relative', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            <ShieldCheck size={13} /> Trust & Legal Compliance
          </span>
          <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
            Built on <span className="gradient-text-cyan">Integrity</span> & Statutory Verification
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            At Honest Individuals (HI Group), every client project is protected by strict NDAs, formal authorization protocols, and MSME statutory compliance.
          </p>
        </div>

        {/* Trust Grid with 3D Spotlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {/* Card 1: MSME Verification */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid var(--accent-cyan)', background: '#ffffff' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--accent-cyan-light)', color: 'var(--accent-cyan)', display: 'inline-block', marginBottom: '16px', transition: 'transform 0.3s ease' }}>
              <Landmark size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              MSME Govt Verified Sole Proprietorship
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              Honest Individuals is an officially registered Sole Proprietorship under the Ministry of Micro, Small and Medium Enterprises (MSME - Udyam Registration).
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} /> <span>Udyam Registration Verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} /> <span>Statutory Banking & Tax Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} /> <span>Zero Invisible Markup / Direct Rates</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: 35% Advance Engagement Token Model */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid var(--accent-purple)', background: '#ffffff' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--accent-purple-light)', color: 'var(--accent-purple)', display: 'inline-block', marginBottom: '16px', transition: 'transform 0.3s ease' }}>
              <FileCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              35% Security Engagement Token
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              To initiate web development or cybersecurity assessments, an initial 35% advance confirms resource allocation and locks project timelines.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-purple)" style={{ flexShrink: 0 }} /> <span>Transparent Milestone Schedule</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-purple)" style={{ flexShrink: 0 }} /> <span>Master Collaboration Agreement Terms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-purple)" style={{ flexShrink: 0 }} /> <span>Zero Cash Transactions Policy</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: PenTest Authorization & NDA */}
          <SpotlightCard className="panel-padding" style={{ borderTop: '3px solid var(--accent-emerald)', background: '#ffffff' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', display: 'inline-block', marginBottom: '16px', transition: 'transform 0.3s ease' }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
              PenTest Authorization & Confidentiality
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
              All penetration tests operate strictly under formal authorization letters. We execute zero non-consensual scans and enforce binding NDAs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> <span>Blackbox / Graybox / Whitebox Scope</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> <span>Full Client Indemnity & Safe Harbor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> <span>Confidential Findings Ledger</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Executive MD Leadership Box */}
        <SpotlightCard
          className="panel-padding trust-md-card"
          style={{
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.35rem',
                fontWeight: 900,
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.2)',
                flexShrink: 0,
                position: 'relative',
              }}
            >
              DD
              <span className="status-dot green" style={{ position: 'absolute', bottom: '2px', right: '2px', width: '9px', height: '9px' }} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Mr. Devesh Dhoble
              </h4>
              <div style={{ fontSize: '0.84rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                Founder & Project Managing Director
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.45 }}>
                Leading project execution, security authorization compliance, and prime network contractor management.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact('MD Direct Consultation')}
            className="btn-primary"
            style={{ padding: '11px 22px', fontSize: '0.88rem', flexShrink: 0 }}
          >
            Connect with Management
          </button>
        </SpotlightCard>

      </div>
    </section>
  );
}
