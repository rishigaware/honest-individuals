import React, { useState } from 'react';
import { Layout, ShieldAlert, GraduationCap, Check, ArrowRight, Laptop, Smartphone, Search, Lock, UserCheck, Briefcase } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('web');

  const webServices = [
    {
      title: 'Business Websites',
      desc: 'Professional, high-impact websites designed to establish online authority and capture incoming client leads.',
      features: ['Lead Generation Forms', 'Custom Branding', 'Fast Load Times', 'SEO Optimized'],
      icon: <Laptop color="var(--accent-primary)" size={24} />,
    },
    {
      title: 'Corporate Websites',
      desc: 'Robust corporate portals built to instill trust, align stakeholder communications, and scale with business operations.',
      features: ['Multi-page Architecture', 'CMS Integration', 'Enterprise Security', 'Analytics Integration'],
      icon: <Briefcase color="var(--accent-primary)" size={24} />,
    },
    {
      title: 'E-commerce Platforms',
      desc: 'Secure, high-converting digital storefronts complete with seamless payment routing and inventory management.',
      features: ['Payment Gateway Integration', 'Product Management', 'Cart & Checkout Flow', 'SSL Data Encryption'],
      icon: <Layout color="var(--accent-primary)" size={24} />,
    },
    {
      title: 'Product Branding & Portfolio Websites',
      desc: 'Creative, interactive showcases designed for brands, freelancers, and professionals to highlight achievements.',
      features: ['Interactive UI/UX', 'Portfolio Media Gallery', 'Social Media Sync', 'Mobile Responsive'],
      icon: <UserCheck color="var(--accent-primary)" size={24} />,
    },
  ];

  const cyberServices = [
    {
      title: 'Web Application Penetration Testing',
      desc: 'Manual ethical hacking to identify business logic flaws, authentication bypasses, and SQL/XSS injections mapped to OWASP.',
      features: ['Authentication Bypass', 'Business Logic Validation', 'Input Sanitization Audit', 'Exploit PoCs'],
      icon: <Lock color="var(--accent-purple)" size={24} />,
    },
    {
      title: 'API Infiltration & Security Verification',
      desc: 'Deep endpoint testing exposing unauthorized data leaks, broken object-level authorization (BOLA), and parameter tampering.',
      features: ['REST/GraphQL Endpoints', 'BOLA & BFLA Testing', 'Token & JWT Analysis', 'Data Exposure Audit'],
      icon: <ShieldAlert color="var(--accent-purple)" size={24} />,
    },
    {
      title: 'Android Application Security Anatomy',
      desc: 'Static and dynamic reverse engineering, APK decompilation, runtime memory analysis, and insecure storage checks.',
      features: ['APK Reverse Engineering', 'Runtime Analysis', 'Insecure Local Storage', 'Hardcoded Secret Extraction'],
      icon: <Smartphone color="var(--accent-purple)" size={24} />,
    },
  ];

  const careerServices = [
    {
      title: 'Career Counseling Report',
      price: '₹1,500',
      desc: 'Includes Personality Analysis, Career Interests, Skills Assessment, Strengths/Weaknesses, and Education Roadmap.',
      features: ['Personality Analysis', 'Career Match %', 'Strengths & Weaknesses', 'Education Roadmap'],
      icon: <GraduationCap color="var(--accent-emerald)" size={24} />,
    },
    {
      title: 'ATS Resume Building',
      price: '₹1,000',
      desc: 'Recruiter-friendly, keyword-optimized resume tailored to pass automated Applicant Tracking Systems.',
      features: ['ATS Parsing Guarantee', 'Skill Keyword Optimization', 'Impact Metrics Alignment', 'Clean Modern Format'],
      icon: <Search color="var(--accent-emerald)" size={24} />,
    },
    {
      title: 'LinkedIn Profile Optimization',
      price: '₹1,000',
      desc: 'Optimized headline, compelling About section, and recruiter keyword placement to boost search visibility.',
      features: ['Headline Optimization', 'Compelling About Section', 'Recruiter Visibility', 'Skills Strategy'],
      icon: <UserCheck color="var(--accent-emerald)" size={24} />,
    },
    {
      title: 'Interview Preparation & Guidance',
      price: '₹2,000',
      desc: 'Comprehensive interview coaching covering technical questions, HR answers, confidence building, and salary negotiation.',
      features: ['Technical & HR Q&A', 'Confidence Coaching', 'Communication Tips', 'Salary Negotiation Strategy'],
      icon: <Briefcase color="var(--accent-emerald)" size={24} />,
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', background: '#ffffff', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '12px' }}>
            Core Offerings
          </span>
          <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
            Comprehensive Solutions Engineered for <span className="gradient-text-cyan">Impact</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            From high-conversion web platforms to elite security audits and career mentorship, Honest Individuals delivers end-to-end excellence.
          </p>

          {/* Service Selector Tabs (Scrollable on mobile) */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <div className="tabs-scroll-container">
              <button
                onClick={() => setActiveTab('web')}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: activeTab === 'web' ? '#ffffff' : 'var(--text-body)',
                  background: activeTab === 'web' ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' : 'transparent',
                  boxShadow: activeTab === 'web' ? 'var(--shadow-md)' : 'none',
                  transform: activeTab === 'web' ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <Layout size={15} /> Web & App Dev
              </button>

              <button
                onClick={() => setActiveTab('cyber')}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: activeTab === 'cyber' ? '#ffffff' : 'var(--text-body)',
                  background: activeTab === 'cyber' ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' : 'transparent',
                  boxShadow: activeTab === 'cyber' ? 'var(--shadow-md)' : 'none',
                  transform: activeTab === 'cyber' ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <ShieldAlert size={15} /> Offensive Security
              </button>

              <button
                onClick={() => setActiveTab('career')}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: activeTab === 'career' ? '#ffffff' : 'var(--text-body)',
                  background: activeTab === 'career' ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'transparent',
                  boxShadow: activeTab === 'career' ? 'var(--shadow-md)' : 'none',
                  transform: activeTab === 'career' ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <GraduationCap size={15} /> Career Hub
              </button>
            </div>
          </div>
        </div>

        {/* Web Development Tab Content */}
        {activeTab === 'web' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
            }}
          >
            {webServices.map((service, idx) => (
              <SpotlightCard key={idx} className="panel-padding" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <div style={{ marginBottom: '16px', padding: '10px', borderRadius: '12px', background: 'var(--accent-primary-light)', display: 'inline-block', width: 'fit-content', transition: 'transform 0.3s ease' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px', flexGrow: 1, lineHeight: 1.55 }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {service.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
                      <Check size={14} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onOpenContact(`Web Dev: ${service.title}`)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.86rem' }}
                >
                  Get Quote <ArrowRight size={15} />
                </button>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* Offensive Security Tab Content */}
        {activeTab === 'cyber' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '20px',
            }}
          >
            {cyberServices.map((service, idx) => (
              <SpotlightCard key={idx} className="panel-padding" style={{ borderTop: '3px solid var(--accent-purple)', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <div style={{ marginBottom: '16px', padding: '10px', borderRadius: '12px', background: 'var(--accent-purple-light)', display: 'inline-block', width: 'fit-content', transition: 'transform 0.3s ease' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px', flexGrow: 1, lineHeight: 1.55 }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {service.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
                      <Check size={14} color="var(--accent-purple)" style={{ flexShrink: 0 }} /> <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onOpenContact(`Cyber Audit: ${service.title}`)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '0.86rem',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)',
                  }}
                >
                  Request Security Audit <ArrowRight size={15} />
                </button>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* Career Hub Tab Content */}
        {activeTab === 'career' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
            }}
          >
            {careerServices.map((service, idx) => (
              <SpotlightCard key={idx} className="panel-padding" style={{ borderTop: '3px solid var(--accent-emerald)', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'var(--accent-emerald-light)', transition: 'transform 0.3s ease' }}>
                    {service.icon}
                  </div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.84rem' }}>{service.price}</span>
                </div>
                <h3 style={{ fontSize: '1.12rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px', flexGrow: 1, lineHeight: 1.55 }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {service.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)', fontWeight: 500 }}>
                      <Check size={14} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onOpenContact(`Career Service: ${service.title}`)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.86rem', borderColor: 'var(--accent-emerald-border)', color: 'var(--accent-emerald)' }}
                >
                  Enroll Now <ArrowRight size={15} />
                </button>
              </SpotlightCard>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
