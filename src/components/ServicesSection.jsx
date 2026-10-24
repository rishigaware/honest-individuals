import React, { useState } from 'react';
import {
  Layout,
  ShieldAlert,
  GraduationCap,
  Check,
  ArrowRight,
  Laptop,
  Smartphone,
  Search,
  Lock,
  UserCheck,
  Briefcase,
  Maximize2,
  Database,
  Building,
  Truck,
  HardHat,
  Dumbbell,
  CalendarDays,
  FileCheck2
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import { WEB_DEV_SLIDES, CYBER_SLIDES, CAREER_SLIDES } from '../data/presentationAssets';

export default function ServicesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('web');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openLightbox = (items, index = 0) => {
    setLightboxImages(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const webSolutions = [
    {
      title: 'Business & Corporate Websites',
      slideIndex: 0,
      slideSrc: '/assets/web-dev/slide_01.png',
      desc: '100% responsive, SEO-friendly websites that build trust, strengthen brands, and drive leads.',
      features: ['Lead Capture Architecture', 'High-Converting Landing Pages', 'Sub-2s Page Load Speeds', 'Continuous Maintenance'],
      icon: <Laptop size={22} color="#ef4444" />,
    },
    {
      title: 'Enterprise Business Applications (CRM, ERP, HRMS)',
      slideIndex: 5,
      slideSrc: '/assets/web-dev/slide_06.png',
      desc: 'Centralized platforms with real-time analytics, automated pipelines, payroll, and inventory control.',
      features: ['CRM Pipelines & Lead Management', 'ERP Inventory & Orders', 'HRMS Attendance & Payroll', 'Centralized Real-time Insights'],
      icon: <Database size={22} color="#ef4444" />,
    },
    {
      title: 'Operations: Invoicing, Dashboards & Portals',
      slideIndex: 6,
      slideSrc: '/assets/web-dev/slide_07.png',
      desc: 'Automated billing, stock tracking, executive admin controls, and self-service customer portals.',
      features: ['Automated PDF Invoicing', 'Stock Level Alerts', 'Custom Role-Based Dashboards', 'Client Self-Service Gateways'],
      icon: <FileCheck2 size={22} color="#ef4444" />,
    },
    {
      title: 'Industry Digital Platforms (Manufacturing, Logistics, Healthcare)',
      slideIndex: 8,
      slideSrc: '/assets/web-dev/slide_09.png',
      desc: 'Tailored workflow software for Manufacturing, Logistics & Fleet, Construction, Events, and Gyms.',
      features: ['Fleet & Shipment Tracking', 'Factory Automation Systems', 'Contractor Site Progress', 'Member Booking Portals'],
      icon: <Building size={22} color="#ef4444" />,
    },
  ];

  const cyberSolutions = [
    {
      title: 'Web Application Penetration Testing',
      slideIndex: 2,
      slideSrc: '/assets/cyber/3.png',
      desc: 'Offensive ethical hacking to break deep business logic flows, bypass authentication, and audit OWASP Top 10.',
      features: ['Authentication Bypass Verification', 'Business Logic Flaw Probing', 'Input Validation & Injection', 'Executive Proof Reports'],
      icon: <Lock size={22} color="#7c3aed" />,
    },
    {
      title: 'API Infiltration & Token Validation',
      slideIndex: 2,
      slideSrc: '/assets/cyber/3.png',
      desc: 'Probing REST/GraphQL endpoints to expose unauthorized data access (BOLA/IDOR) and parameter tampering.',
      features: ['BOLA & BFLA Exploitation', 'JWT & Session Token Integrity', 'Mass Assignment Vulnerabilities', 'Step-by-Step PoC Guides'],
      icon: <ShieldAlert size={22} color="#7c3aed" />,
    },
    {
      title: 'Android Mobile Application Anatomy',
      slideIndex: 2,
      slideSrc: '/assets/cyber/3.png',
      desc: 'Deep reverse engineering, APK decompilation with JADX, runtime memory analysis, and insecure storage checks.',
      features: ['APK Reverse Engineering', 'Runtime Memory Analysis', 'Insecure SQLite & Cache Checks', 'Hardcoded Secret Extraction'],
      icon: <Smartphone size={22} color="#7c3aed" />,
    },
    {
      title: 'Elite Credentials & Strategic Payoff',
      slideIndex: 3,
      slideSrc: '/assets/cyber/4.png',
      desc: 'Engineered by dedicated team holding OSCP, CEH, and OWASP Expert credentials. Clear vendor security assessments instantly.',
      features: ['OSCP & CEH Methodologies', 'Audit-Ready Enterprise Documentation', 'Accelerated Deal Clearance', 'Remediation Consultations'],
      icon: <ShieldAlert size={22} color="#7c3aed" />,
    },
  ];

  const careerSolutions = [
    {
      title: 'Career Counseling Report',
      price: '₹1,500',
      slideIndex: 1,
      slideSrc: '/assets/career/student_slide_02.png',
      desc: 'Comprehensive diagnostic: Personality Analysis, Career Interests, Skills Assessment, and Educational Roadmap.',
      features: ['Personality Analysis', 'Career Match %', 'Strengths & Weaknesses', 'Education Roadmap'],
      icon: <GraduationCap size={22} color="#059669" />,
    },
    {
      title: 'ATS Resume Building',
      price: '₹1,000',
      slideIndex: 1,
      slideSrc: '/assets/career/student_slide_02.png',
      desc: 'Professionally crafted, ATS-friendly resume formatted to breeze through automated screening systems.',
      features: ['Keyword Density Optimization', 'Recruiter-Friendly Format', 'Action-Oriented Impact Metrics', '90%+ Match Rate'],
      icon: <Search size={22} color="#059669" />,
    },
    {
      title: 'LinkedIn Optimization & Personal Branding',
      price: '₹1,000 - ₹3,000',
      slideIndex: 1,
      slideSrc: '/assets/career/student_slide_02.png',
      desc: 'SEO headline crafting, rich About storytelling, authority building, and recruiter visibility enhancement.',
      features: ['Headline & Bio Crafting', 'Recruiter Search Strategy', 'Authority Building', 'Social Proof Setup'],
      icon: <UserCheck size={22} color="#059669" />,
    },
    {
      title: 'Interview Preparation & Strategy',
      price: '₹2,000',
      slideIndex: 1,
      slideSrc: '/assets/career/student_slide_02.png',
      desc: '1-on-1 mock interviews, technical & HR questions, confidence coaching, and salary negotiation tactics.',
      features: ['Mock Interview Sessions', 'Technical & HR Question Bank', 'Communication Coaching', 'Salary Negotiation Tips'],
      icon: <Briefcase size={22} color="#059669" />,
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', background: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(28px, 5vw, 45px) auto' }}>
          <span className="badge badge-rose" style={{ marginBottom: '12px' }}>
            Multi-Domain Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
            Comprehensive Solutions Engineered with <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>Verifiable Quality</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
            Every solution is backed by real engineering blueprints, battle-tested security frameworks, and structured career development roadmaps.
          </p>

          {/* Service Pillar Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { id: 'web', label: 'Web & App Engineering', count: '15 Slides', icon: <Laptop size={14} />, color: '#eb1623' },
              { id: 'cyber', label: 'Offensive Cybersecurity', count: '6 Slides', icon: <Lock size={14} />, color: '#ff2a38' },
              { id: 'career', label: 'Career Counseling & ATS', count: '6 Slides', icon: <GraduationCap size={14} />, color: '#eb1623' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive ? 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)' : 'rgba(20, 24, 34, 0.85)',
                    border: isActive ? '1px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isActive ? '0 4px 18px rgba(235, 22, 35, 0.45)' : 'none',
                    transform: isActive ? 'scale(1.03)' : 'scale(1)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : '#94a3b8',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            FEATURED SLIDE BANNER FOR SELECTED SERVICE PILLAR
           ========================================================================= */}
        <div
          style={{
            background: '#070a12',
            borderRadius: '16px',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            padding: 'clamp(16px, 3vw, 28px)',
            marginBottom: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '24px',
            alignItems: 'center',
            color: '#ffffff',
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
              {activeTab === 'web' && 'Web Architecture Deck • Slide Preview'}
              {activeTab === 'cyber' && 'Security Deck • Offensive Vectors'}
              {activeTab === 'career' && 'Career Deck • 7 Core Offerings'}
            </span>

            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              {activeTab === 'web' && 'Smart, Scalable, Secure Digital Platforms'}
              {activeTab === 'cyber' && 'Offensive Threat Discovery Mapped to OWASP'}
              {activeTab === 'career' && 'Empowering Careers with Scientifically Backed Roadmaps'}
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {activeTab === 'web' && 'From custom responsive business websites to full-scale ERP and CRM automation suites, we design solutions that streamline operations and maximize client conversion.'}
              {activeTab === 'cyber' && 'Manual penetration testing across web applications, REST APIs, and decompiled Android APKs to intercept vulnerabilities before threat actors exploit them.'}
              {activeTab === 'career' && 'End-to-end career guidance, psychological analysis, ATS resume transformations, and LinkedIn optimization for students and senior professionals.'}
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  if (activeTab === 'web') openLightbox(WEB_DEV_SLIDES, 0);
                  if (activeTab === 'cyber') openLightbox(CYBER_SLIDES, 0);
                  if (activeTab === 'career') openLightbox(CAREER_SLIDES, 0);
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: '#ef4444',
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
                <Maximize2 size={14} /> Open Full Presentation Deck
              </button>

              <button
                onClick={() => onOpenContact(`Inquiry for ${activeTab.toUpperCase()} Services`)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Request Custom Proposal
              </button>
            </div>
          </div>

          {/* Interactive Slide Thumbnail Preview */}
          <div
            onClick={() => {
              if (activeTab === 'web') openLightbox(WEB_DEV_SLIDES, 0);
              if (activeTab === 'cyber') openLightbox(CYBER_SLIDES, 0);
              if (activeTab === 'career') openLightbox(CAREER_SLIDES, 0);
            }}
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: '#000',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
              aspectRatio: '16 / 9',
            }}
          >
            <img
              src={
                activeTab === 'web'
                  ? '/assets/web-dev/slide_01.png'
                  : activeTab === 'cyber'
                  ? '/assets/cyber/1.png'
                  : '/assets/career/student_slide_01.png'
              }
              alt="Deck Cover"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
                fontSize: '0.84rem',
                fontWeight: 600,
                opacity: 0,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
            >
              <Maximize2 size={18} /> Click to View Fullscreen Slide Deck
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED SOLUTION CARDS FOR THE ACTIVE PILLAR
           ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {activeTab === 'web' &&
            webSolutions.map((srv, idx) => (
              <SpotlightCard
                key={idx}
                className="panel-padding"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface)',
                  borderTop: '3px solid #eb1623',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(235, 22, 35, 0.12)' }}>
                      {srv.icon}
                    </div>
                    <button
                      onClick={() => openLightbox(WEB_DEV_SLIDES, srv.slideIndex)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#eb1623',
                        cursor: 'pointer',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Maximize2 size={12} /> View Slide
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                    {srv.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {srv.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                        <Check size={14} color="#eb1623" style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact(`Inquiry: ${srv.title}`)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                >
                  Consult on this Solution
                </button>
              </SpotlightCard>
            ))}

          {activeTab === 'cyber' &&
            cyberSolutions.map((srv, idx) => (
              <SpotlightCard
                key={idx}
                className="panel-padding"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface)',
                  borderTop: '3px solid #ff2a38',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(235, 22, 35, 0.12)' }}>
                      {srv.icon}
                    </div>
                    <button
                      onClick={() => openLightbox(CYBER_SLIDES, srv.slideIndex)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#ff2a38',
                        cursor: 'pointer',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Maximize2 size={12} /> View Slide
                    </button>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                    {srv.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {srv.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                        <Check size={14} color="#ff2a38" style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact(`Cyber Audit Inquiry: ${srv.title}`)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                >
                  Schedule Security Scoping
                </button>
              </SpotlightCard>
            ))}

          {activeTab === 'career' &&
            careerSolutions.map((srv, idx) => (
              <SpotlightCard
                key={idx}
                className="panel-padding"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface)',
                  borderTop: '3px solid #eb1623',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(235, 22, 35, 0.12)' }}>
                      {srv.icon}
                    </div>
                    {srv.price && (
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ff2a38', fontFamily: 'var(--font-mono)' }}>
                        {srv.price}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                    {srv.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {srv.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                        <Check size={14} color="#eb1623" style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact(`Career Service Booking: ${srv.title}`)}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                >
                  Book Consultation
                </button>
              </SpotlightCard>
            ))}
        </div>

      </div>

      {/* Lightbox for zooming slides */}
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
