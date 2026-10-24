import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  FileCode,
  ChevronRight,
  ShieldAlert,
  Terminal,
  Shield,
  Maximize2,
  Award,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import { CYBER_SLIDES } from '../data/presentationAssets';

export default function SecurityLedger({ onOpenContact }) {
  const [selectedVuln, setSelectedVuln] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openCyberSlide = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const vulnerabilities = [
    {
      id: 'VULN-001',
      title: 'Broken Access Control & IDOR (BOLA)',
      severity: 'Critical',
      severityColor: '#ef4444',
      badgeClass: 'badge-rose',
      cve: 'OWASP A01:2021',
      surface: 'Web / REST API',
      impact: 'Allows unauthenticated users to access sensitive database records and alter user roles.',
      pocSnippet: 'GET /api/v1/user/account?id=1092 HTTP/1.1\nHost: api.target-client.com\nAuthorization: Bearer <Low_Privilege_Token>\n--> 200 OK (Exposes Admin PII Data & Roles)',
      recommendation: 'Enforce server-side role-based access control (RBAC) and object-level authorization checks.',
    },
    {
      id: 'VULN-002',
      title: 'SQL Injection in Search Endpoint',
      severity: 'High',
      severityColor: '#f59e0b',
      badgeClass: 'badge-amber',
      cve: 'OWASP A03:2021',
      surface: 'Web Backend API',
      impact: 'Unsanitized input allows attacker to bypass authentication and dump table data.',
      pocSnippet: "POST /api/search HTTP/1.1\nContent-Type: application/json\n\n{\"query\": \"admin' UNION SELECT 1,username,password_hash FROM users--\"}",
      recommendation: 'Implement parameterized SQL queries and prepared statements across all database connectors.',
    },
    {
      id: 'VULN-003',
      title: 'Hardcoded API Key in Android APK',
      severity: 'High',
      severityColor: '#f59e0b',
      badgeClass: 'badge-amber',
      cve: 'OWASP M01:2024',
      surface: 'Android APK Binary',
      impact: 'Decompilation via JADX exposes AWS Secret Keys and Firebase Admin Tokens inside APK assets.',
      pocSnippet: '// Extracted via jadx -d out app-release.apk\npublic class SecretConfig {\n   public static String AWS_SECRET = "AKIAIOSFODNN7EXAMPLE";\n}',
      recommendation: 'Store sensitive keys in secure key vaults / backend secrets managers; never embed static keys in APK binaries.',
    },
    {
      id: 'VULN-004',
      title: 'Insecure JWT Token Validation',
      severity: 'Medium',
      severityColor: '#0284c7',
      badgeClass: 'badge-cyan',
      cve: 'OWASP A07:2021',
      surface: 'API Auth Service',
      impact: 'Acceptance of "none" algorithm in JWT headers allows unauthorized token forgery.',
      pocSnippet: 'Header: {"alg": "none", "typ": "JWT"}\nPayload: {"user": "admin", "role": "superadmin"}',
      recommendation: 'Enforce asymmetric RS256 algorithm validation and reject unsigned token headers.',
    },
  ];

  return (
    <section id="cybersecurity" className="section-padding" style={{ position: 'relative', background: '#090b0e', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      
      {/* Background Cyber Red Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(235, 22, 35, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'rgba(235, 22, 35, 0.14)',
              border: '1px solid rgba(235, 22, 35, 0.35)',
              color: '#ff3344',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px',
            }}
          >
            <Shield size={13} /> Offensive Security Assessment
          </span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
            Zero-Compromise <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>Ethical Hacking</span> & Threat Validation
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
            Engineered by a dedicated offensive security squad holding <strong style={{ color: '#ffffff' }}>OSCP, CEH, and OWASP Expert</strong> credentials. Comprehensive Web, API, and Android vulnerability validation.
          </p>
        </div>

        {/* 3 Core Attack Surfaces (with Slide 3 Visual Link) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {/* Card 1: Web Exploitation */}
          <SpotlightCard className="panel-padding" style={{ background: '#11141b', borderTop: '3px solid #eb1623', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(235, 22, 35, 0.15)', color: '#ff2a38' }}>
                <Lock size={20} />
              </div>
              <button
                onClick={() => openCyberSlide(2)}
                style={{ background: 'transparent', border: 'none', color: '#ff2a38', cursor: 'pointer', fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Maximize2 size={12} /> Slide 3
              </button>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              Web Exploitation
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Forcing authentication bypass and breaking deep business logic flows across web applications and admin portals.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>✓ OWASP Top 10 Manual Verification</div>
              <div>✓ Session Management & RBAC Flaws</div>
              <div>✓ Server-Side Request Forgery (SSRF)</div>
            </div>
          </SpotlightCard>

          {/* Card 2: API Infiltration */}
          <SpotlightCard className="panel-padding" style={{ background: '#11141b', borderTop: '3px solid #ff2a38', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(235, 22, 35, 0.15)', color: '#eb1623' }}>
                <ShieldAlert size={20} />
              </div>
              <button
                onClick={() => openCyberSlide(2)}
                style={{ background: 'transparent', border: 'none', color: '#ff2a38', cursor: 'pointer', fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Maximize2 size={12} /> Slide 3
              </button>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              API Infiltration
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Probing endpoints to expose unauthorized data access (BOLA/IDOR) and parameter tampering in REST/GraphQL services.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>✓ Broken Object-Level Authorization</div>
              <div>✓ Mass Assignment Exploits</div>
              <div>✓ JWT Signature Manipulation</div>
            </div>
          </SpotlightCard>

          {/* Card 3: Android Anatomy */}
          <SpotlightCard className="panel-padding" style={{ background: '#11141b', borderTop: '3px solid #d31825', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(211, 24, 37, 0.15)', color: '#ff4d5a' }}>
                <Smartphone size={20} />
              </div>
              <button
                onClick={() => openCyberSlide(2)}
                style={{ background: 'transparent', border: 'none', color: '#ff4d5a', cursor: 'pointer', fontSize: '0.74rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Maximize2 size={12} /> Slide 3
              </button>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
              Android Anatomy
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Deep reverse engineering, APK decompilation via JADX, and runtime memory analysis to extract sensitive keys and logic.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>✓ JADX Decompilation Analysis</div>
              <div>✓ Insecure Local SQLite Storage</div>
              <div>✓ Hardcoded Cloud & API Secrets</div>
            </div>
          </SpotlightCard>
        </div>

        {/* =========================================================================
            CYBERSECURITY SLIDES CAROUSEL / PRESENTATION BANNER
           ========================================================================= */}
        <div
          style={{
            background: '#11141b',
            borderRadius: '16px',
            border: '1px solid rgba(235, 22, 35, 0.28)',
            padding: '24px',
            marginBottom: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '24px',
            alignItems: 'center',
            boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
          }}
        >
          <div>
            <span
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                fontSize: '0.74rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px',
              }}
            >
              Official Assessment Deck
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
              Threat Intelligence Package & Enterprise Reports
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Every penetration test culminates in a comprehensive, industry-accepted vulnerability report that serves as certified security proof for your clients, auditors, and enterprise compliance teams.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openCyberSlide(0)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                  boxShadow: '0 4px 14px rgba(235, 22, 35, 0.4)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Maximize2 size={14} /> Open 6-Slide VAPT Deck
              </button>
              <button
                onClick={() => onOpenContact('Request VAPT Security Audit')}
                style={{
                  padding: '9px 16px',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Request VAPT Scope & NDA
              </button>
            </div>
          </div>

          {/* Interactive Slide 1 & 3 Previews */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div
              onClick={() => openCyberSlide(0)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#000',
              }}
            >
              <img src="/assets/cyber/1.png" alt="Offensive Security Slide 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '6px 8px', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600 }}>
                Slide 1: Assessment Cover
              </div>
            </div>

            <div
              onClick={() => openCyberSlide(2)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#000',
              }}
            >
              <img src="/assets/cyber/3.png" alt="Target Attack Surfaces Slide 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '6px 8px', fontSize: '0.72rem', color: '#cbd5e1', fontWeight: 600 }}>
                Slide 3: Attack Surfaces
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE TERMINAL & VULNERABILITY REPRODUCTION STAGE
           ========================================================================= */}
        <div
          style={{
            background: '#0d1017',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.75)',
          }}
        >
          {/* Terminal Window Header */}
          <div
            style={{
              padding: '12px 20px',
              background: '#080a0f',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eb1623' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginLeft: '8px' }}>
                hi-security-agent@audit-session:~
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#ff2a38', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              <Terminal size={14} /> LIVE REPRODUCTION LEDGER
            </div>
          </div>

          {/* Terminal Content Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '0',
            }}
          >
            {/* Left Column: Vulnerability Selector List */}
            <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px', letterSpacing: '0.04em' }}>
                Deducted Security Findings ({vulnerabilities.length})
              </div>
              {vulnerabilities.map((vuln, idx) => {
                const isSelected = selectedVuln === idx;
                return (
                  <div
                    key={vuln.id}
                    onClick={() => setSelectedVuln(idx)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: isSelected ? 'rgba(235, 22, 35, 0.14)' : 'transparent',
                      border: isSelected ? '1px solid rgba(235, 22, 35, 0.4)' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: isSelected ? '#ff2a38' : '#94a3b8' }}>
                        {vuln.id}
                      </span>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: `${vuln.severityColor}20`,
                          color: vuln.severityColor,
                        }}
                      >
                        {vuln.severity}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 600, color: isSelected ? '#ffffff' : '#cbd5e1' }}>
                      {vuln.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Vulnerability PoC & Remediation */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    Surface: <strong style={{ color: '#ffffff' }}>{vulnerabilities[selectedVuln].surface}</strong>
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#ff2a38', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    {vulnerabilities[selectedVuln].cve}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {vulnerabilities[selectedVuln].title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '16px' }}>
                  {vulnerabilities[selectedVuln].impact}
                </p>

                {/* PoC Snippet Box */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
                    Reproduced Exploit PoC
                  </div>
                  <pre
                    style={{
                      background: '#07090e',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ff6675',
                      overflowX: 'auto',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {vulnerabilities[selectedVuln].pocSnippet}
                  </pre>
                </div>

                {/* Remediation */}
                <div style={{ background: 'rgba(235, 22, 35, 0.08)', border: '1px solid rgba(235, 22, 35, 0.25)', padding: '12px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.74rem', color: '#ff3344', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Remediation Advisory
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
                    {vulnerabilities[selectedVuln].recommendation}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => onOpenContact(`Inquiry for VAPT Remediation: ${vulnerabilities[selectedVuln].title}`)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                    boxShadow: '0 4px 14px rgba(235, 22, 35, 0.4)',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Request Security Audit Report
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox for zooming slides */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={CYBER_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
