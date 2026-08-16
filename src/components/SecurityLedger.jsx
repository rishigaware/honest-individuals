import React, { useState } from 'react';
import { ShieldCheck, Lock, FileCode, ChevronRight, ShieldAlert, Terminal, Shield } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function SecurityLedger({ onOpenContact }) {
  const [selectedVuln, setSelectedVuln] = useState(0);

  const vulnerabilities = [
    {
      id: 'VULN-001',
      title: 'Broken Access Control & IDOR',
      severity: 'Critical',
      severityColor: 'var(--accent-rose)',
      badgeClass: 'badge-rose',
      cve: 'OWASP A01:2021',
      surface: 'Web / REST API',
      impact: 'Allows unauthenticated users to access sensitive database records and alter user roles.',
      pocSnippet: 'GET /api/v1/user/account?id=1092 HTTP/1.1\nHost: api.target-client.com\nAuthorization: Bearer <Low_Privilege_Token>\n--> 200 OK (Exposes Admin PII Data)',
      recommendation: 'Enforce server-side role-based access control (RBAC) and object-level authorization checks.',
    },
    {
      id: 'VULN-002',
      title: 'SQL Injection in Search Endpoint',
      severity: 'High',
      severityColor: 'var(--accent-amber)',
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
      severityColor: 'var(--accent-amber)',
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
      severityColor: 'var(--accent-cyan)',
      badgeClass: 'badge-cyan',
      cve: 'OWASP A07:2021',
      surface: 'API Auth Service',
      impact: 'Acceptance of "none" algorithm in JWT headers allows unauthorized token forgery.',
      pocSnippet: 'Header: {"alg": "none", "typ": "JWT"}\nPayload: {"user": "admin", "role": "superadmin"}',
      recommendation: 'Enforce asymmetric RS256 algorithm validation and reject unsigned token headers.',
    },
  ];

  return (
    <section id="cybersecurity" className="section-padding" style={{ position: 'relative', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span className="badge badge-purple" style={{ marginBottom: '12px' }}>
            <Shield size={13} /> Offensive Security Ledger
          </span>
          <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
            Zero-Compromise <span className="gradient-text-purple">Ethical Hacking</span> & Threat Validation
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            Engineered by certified ethical hackers holding <strong style={{ color: 'var(--text-main)' }}>CRTA, CEH, eJPT, ACP</strong> credentials. We probe target attack surfaces before malicious actors do.
          </p>
        </div>

        {/* Attack Surfaces Grid with 3D Spotlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <SpotlightCard className="panel-padding scroll-stagger-item" style={{ background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ padding: '9px', borderRadius: '10px', background: 'var(--accent-purple-light)', color: 'var(--accent-purple)', flexShrink: 0 }}>
                <Lock size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>Web Penetration</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              Manual ethical testing of business logic, access controls, SQL injections, and XSS mapped to OWASP.
            </p>
          </SpotlightCard>

          <SpotlightCard className="panel-padding scroll-stagger-item" style={{ background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ padding: '9px', borderRadius: '10px', background: 'var(--accent-cyan-light)', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                <ShieldAlert size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>API Infiltration</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              Probing endpoints to expose unauthorized data access, BOLA vulnerabilities, and parameter manipulation.
            </p>
          </SpotlightCard>

          <SpotlightCard className="panel-padding scroll-stagger-item" style={{ background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ padding: '9px', borderRadius: '10px', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', flexShrink: 0 }}>
                <FileCode size={20} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>Android App Anatomy</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
              Deep reverse engineering, APK decompilation, runtime memory analysis, and hardcoded secret extraction.
            </p>
          </SpotlightCard>
        </div>

        {/* Interactive Vulnerability Ledger Table */}
        <div className="glass-panel panel-padding scroll-stagger-item" style={{ background: '#ffffff', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', gap: '12px' }}>
            <div>
              <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck color="var(--accent-purple)" size={18} style={{ flexShrink: 0 }} /> Audit Vulnerability Ledger Demonstrator
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '2px' }}>
                Interactive sample of executive vulnerability findings generated during penetration testing engagements.
              </p>
            </div>
            <button
              onClick={() => onOpenContact('Cybersecurity Audit')}
              className="btn-primary"
              style={{
                padding: '9px 18px',
                fontSize: '0.86rem',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)',
              }}
            >
              Schedule PenTest
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '20px' }} className="ledger-grid">
            
            {/* Vulnerability Selection List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {vulnerabilities.map((vuln, idx) => (
                <div
                  key={vuln.id}
                  onClick={() => setSelectedVuln(idx)}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: selectedVuln === idx ? 'var(--accent-purple-light)' : '#ffffff',
                    border: selectedVuln === idx ? '1px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                    boxShadow: selectedVuln === idx ? 'var(--shadow-md)' : 'none',
                    transform: selectedVuln === idx ? 'translateX(4px)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', gap: '8px' }}>
                    <span style={{ fontSize: '0.76rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{vuln.id}</span>
                    <span className={`badge ${vuln.badgeClass}`} style={{ fontSize: '0.68rem', padding: '2px 7px' }}>{vuln.severity}</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>{vuln.title}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>{vuln.cve} • {vuln.surface}</div>
                </div>
              ))}
            </div>

            {/* Selected Vulnerability Detail Panel with Cyber Scanline Laser */}
            <div
              className="scanline-container"
              style={{
                background: '#0f172a',
                borderRadius: '14px',
                padding: 'clamp(16px, 3vw, 24px)',
                border: '1px solid #1e293b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#f8fafc',
                boxShadow: '0 10px 25px rgba(15, 23, 42, 0.25)',
              }}
            >
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Terminal size={18} color="#38bdf8" />
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                      {vulnerabilities[selectedVuln].title}
                    </h4>
                  </div>
                  <span className={`badge ${vulnerabilities[selectedVuln].badgeClass}`} style={{ fontSize: '0.72rem' }}>
                    {vulnerabilities[selectedVuln].severity}
                  </span>
                </div>

                <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '14px', lineHeight: 1.55 }}>
                  <strong style={{ color: '#ffffff' }}>Business Impact:</strong> {vulnerabilities[selectedVuln].impact}
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#38bdf8', marginBottom: '6px', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="status-dot green" style={{ width: '6px', height: '6px' }} /> TECHNICAL EXPLOIT EVIDENCE (PoC):
                  </div>
                  <pre
                    style={{
                      background: '#020617',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
                      fontFamily: 'var(--font-mono)',
                      color: '#6ee7b7',
                      overflowX: 'auto',
                      border: '1px solid #1e293b',
                      lineHeight: 1.45,
                    }}
                  >
                    {vulnerabilities[selectedVuln].pocSnippet}
                  </pre>
                </div>

                <div style={{ fontSize: '0.84rem', color: '#cbd5e1' }}>
                  <strong style={{ color: '#34d399' }}>Remediation Guidance:</strong> {vulnerabilities[selectedVuln].recommendation}
                </div>
              </div>

              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid #1e293b', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <span style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                  Audit Ready • NDA Enforced
                </span>
                <button
                  onClick={() => onOpenContact(`Exploit Report Inquiry: ${vulnerabilities[selectedVuln].id}`)}
                  style={{ color: '#c084fc', fontSize: '0.84rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Request Full Methodology <ChevronRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
