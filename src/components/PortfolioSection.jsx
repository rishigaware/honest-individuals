import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { Layers } from 'lucide-react';

export default function PortfolioSection({ onOpenContact }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'Corporate Business Website Platform',
      client: 'Authorized Client Project',
      tech: ['React', 'Node.js', 'Vite', 'REST API'],
      desc: 'Custom corporate web solution with 8-10 week development lifecycle, modern UI/UX, mobile responsiveness, and high-converting lead forms.',
      metric: '100% Mobile Optimized',
      badge: 'Web Application',
    },
    {
      id: 2,
      category: 'cyber',
      title: 'Offensive Penetration Testing Audit',
      client: 'Formally Authorized Security Scope',
      tech: ['OWASP Top 10', 'API Testing', 'Burp Suite', 'Android Reverse Engineering'],
      desc: 'Full-scale manual vulnerability assessment across target web applications and APIs, uncovering critical BOLA and IDOR flaws with audit reports.',
      metric: '5 Vulnerabilities Patched',
      badge: 'Cybersecurity Audit',
    },
    {
      id: 3,
      category: 'career',
      title: 'College Resume & LinkedIn Masterclass',
      client: 'Graduate Career Readiness Program',
      tech: ['ATS Parsing', 'Personal Branding', 'Interview Prep'],
      desc: 'Delivered career guidance workshops and ATS-friendly resume transformations for students seeking software engineering & cybersecurity roles.',
      metric: '94% ATS Match Rate',
      badge: 'Career Counseling',
    },
    {
      id: 4,
      category: 'web',
      title: 'E-commerce Storefront & Gateway',
      client: 'Retail Business Brand',
      tech: ['React', 'Stripe/Razorpay', 'Tailwind', 'Node.js'],
      desc: 'High-speed e-commerce solution featuring instant cart routing, encrypted checkout, product catalog management, and search filters.',
      metric: '2.1s Page Load',
      badge: 'E-commerce',
    },
    {
      id: 5,
      category: 'cyber',
      title: 'Android APK Security Anatomy Audit',
      client: 'Mobile Application Client',
      tech: ['JADX', 'Runtime Memory Analysis', 'Static Analysis'],
      desc: 'Decompiled release APK, identified hardcoded secrets, insecure local SQLite databases, and recommended secret manager integration.',
      metric: 'Zero Data Exposure',
      badge: 'Mobile Security',
    },
    {
      id: 6,
      category: 'career',
      title: 'Executive Personal Branding Strategy',
      client: 'Senior Tech Professional',
      tech: ['LinkedIn Strategy', 'Bio Crafting', 'Portfolio Site'],
      desc: 'Custom portfolio site creation, LinkedIn headline revamp, and job search strategy report leading to multiple interview callbacks.',
      metric: '3x Recruiter Views',
      badge: 'Personal Branding',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(24px, 4vw, 40px) auto' }}>
          <span className="badge badge-purple" style={{ marginBottom: '12px' }}>
            <Layers size={13} /> Portfolio & Impact
          </span>
          <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
            Selected Deliveries & <span className="gradient-text-purple">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            Explore verified work spanning web application engineering, offensive penetration testing, and career counseling outcomes.
          </p>

          {/* Filter Pills with Spring Animation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '20px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web & Mobile Apps' },
              { id: 'cyber', label: 'Cybersecurity Audits' },
              { id: 'career', label: 'Career Outcomes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: filter === tab.id ? '#ffffff' : 'var(--text-body)',
                  background: filter === tab.id ? '#0f172a' : '#f1f5f9',
                  border: filter === tab.id ? '1px solid #0f172a' : '1px solid var(--border-subtle)',
                  boxShadow: filter === tab.id ? '0 4px 12px rgba(15, 23, 42, 0.15)' : 'none',
                  transform: filter === tab.id ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with 3D Spotlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="panel-padding"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', gap: '8px' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>{project.badge}</span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>{project.metric}</span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
                  {project.client}
                </div>

                <p style={{ color: 'var(--text-body)', fontSize: '0.86rem', marginBottom: '16px', lineHeight: 1.5 }}>
                  {project.desc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '20px' }}>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        color: 'var(--text-body)',
                        fontWeight: 500,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenContact(`Portfolio Inquiry: ${project.title}`)}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.84rem' }}
              >
                Inquire Similar Solution
              </button>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
