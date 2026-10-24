import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  ArrowRight,
  Sparkles,
  Check,
  Maximize2,
  GraduationCap,
  School,
  BookOpen,
  Briefcase
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import { CAREER_SLIDES } from '../data/presentationAssets';

export default function CareerPackageBuilder({ onOpenContact }) {
  const allServices = [
    { id: 'counseling', name: 'Career Counseling Report', price: 1500, desc: 'Personality Analysis, Skills Assessment, Match %, Roadmap' },
    { id: 'resume', name: 'ATS Resume Building', price: 1000, desc: 'ATS-friendly resume, recruiter keyword optimization' },
    { id: 'linkedin', name: 'LinkedIn Profile Optimization', price: 1000, desc: 'Headline, About section, recruiter search visibility' },
    { id: 'interview', name: 'Interview Preparation & Guidance', price: 2000, desc: 'HR & Technical Q&A, mock practice, salary negotiation' },
    { id: 'branding', name: 'Personal Branding & Strategy', price: 3000, desc: 'Professional bio, LinkedIn branding strategy, authority building' },
    { id: 'portfolio', name: 'Digital Portfolio Creation', price: 2000, desc: 'Personal web/PDF portfolio showcasing projects' },
    { id: 'jobsearch', name: 'Job Search Strategy Report', price: 1000, desc: 'Industry hiring trends, company research, application roadmap' },
  ];

  // Default selected: all services for the bundle
  const [selectedIds, setSelectedIds] = useState(['counseling', 'resume', 'linkedin', 'interview', 'branding', 'portfolio', 'jobsearch']);
  const [animatingKey, setAnimatingKey] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openSlide = (idx = 0) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const toggleService = (id) => {
    setAnimatingKey((prev) => prev + 1);
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const rawTotal = selectedIds.reduce((sum, id) => {
    const s = allServices.find((item) => item.id === id);
    return sum + (s ? s.price : 0);
  }, 0);

  // Apply special bundle discount if 4 or more items selected
  const isBundle = selectedIds.length >= 4;
  const finalPrice = isBundle ? (selectedIds.length === 7 ? 9999 : Math.round(rawTotal * 0.85)) : rawTotal;
  const savings = rawTotal - finalPrice;

  return (
    <section id="career-hub" className="section-padding" style={{ position: 'relative', background: '#0d1017', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(20px, 3.5vw, 36px) auto' }}>
          <span className="badge badge-rose" style={{ marginBottom: '10px' }}>
            <Sparkles size={12} /> Career Counseling & Growth Hub
          </span>
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
            Transforming Careers with <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>ATS Precision & Mentorship</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
            Empowering students, fresh graduates, and working professionals to stand out in AI-screened recruitment workflows and secure high-value offers.
          </p>
        </div>

        {/* Featured Premium Package Hero Banner with Real Slide 1 Preview */}
        <div
          className="glass-panel panel-padding"
          style={{
            marginBottom: '36px',
            background: 'linear-gradient(135deg, rgba(235, 22, 35, 0.14) 0%, #141822 50%, #0d1017 100%)',
            border: '1px solid rgba(235, 22, 35, 0.35)',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 25px rgba(235, 22, 35, 0.15)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '28px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-rose">
                  <Sparkles size={13} /> Most Popular Bundle
                </span>
                <span style={{ fontSize: '0.8rem', color: '#ff4d5a', fontWeight: 700 }}>
                  SAVE ₹1,501 IMMEDIATELY
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
                Premium Career Success Package
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
                The complete 360° career upgrade bundle from our official business profile. Guaranteed to optimize your resume for ATS systems, revamp your LinkedIn presence, prepare you for high-stakes interviews, and map your long-term career trajectory.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '8px', marginBottom: '20px' }}>
                {[
                  'Career Counseling Report (₹1,500)',
                  'ATS Resume Building (₹1,000)',
                  'LinkedIn Profile Optimization (₹1,000)',
                  'Interview Prep & Guidance (₹2,000)',
                  'Personal Branding (₹3,000)',
                  'Digital Portfolio Setup (₹2,000)',
                  'Job Search Strategy (₹1,000)',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 600 }}>
                    <Check size={14} color="#eb1623" style={{ flexShrink: 0 }} /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenContact('Premium Career Success Package (₹9,999)')}
                  className="btn-primary"
                  style={{
                    padding: '11px 22px',
                    fontSize: '0.88rem',
                  }}
                >
                  Claim Premium Package (₹9,999) <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => openSlide(0)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    background: '#161b26',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Maximize2 size={14} /> View Official Deck
                </button>
              </div>
            </div>

            {/* Price Box with Slide 1 Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <SpotlightCard
                style={{
                  background: '#141822',
                  padding: '20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(235, 22, 35, 0.35)',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 20px rgba(235, 22, 35, 0.15)',
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Standalone Total: <span style={{ textDecoration: 'line-through', color: '#ef4444' }}>₹11,500</span>
                </div>
                <div style={{ fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', fontWeight: 900, color: '#ff2a38', margin: '4px 0 2px 0', fontFamily: 'var(--font-heading)', textShadow: '0 0 20px rgba(235, 22, 35, 0.4)' }}>
                  ₹9,999
                </div>
                <div style={{ fontSize: '0.76rem', color: '#94a3b8', marginBottom: '10px' }}>
                  Complete 7-in-1 Mentorship Package
                </div>
                <div style={{ padding: '7px 10px', borderRadius: '8px', background: 'rgba(235, 22, 35, 0.12)', color: '#ff4d5a', fontSize: '0.76rem', fontWeight: 700, border: '1px solid rgba(235, 22, 35, 0.25)' }}>
                  Mission: Guiding Careers. Building Futures.
                </div>
              </SpotlightCard>

              {/* Slide Thumbnail */}
              <div
                onClick={() => openSlide(0)}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid #cbd5e1',
                  background: '#070a12',
                  position: 'relative',
                  aspectRatio: '16 / 9',
                }}
              >
                <img
                  src="/assets/career/student_slide_01.png"
                  alt="Career Counseling Deck Slide"
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
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <Maximize2 size={16} /> Click to Inspect Slide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CUSTOM PACKAGE CALCULATOR: SELECT EXACT SERVICES NEEDED
           ========================================================================= */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              Custom Package Builder (Pick & Choose Your Services)
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>
              Select 4 or more services to automatically apply bundle savings of up to 15%.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px', alignItems: 'start' }}>
            
            {/* Checklist of Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {allServices.map((service) => {
                const isSelected = selectedIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: isSelected ? '1.5px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isSelected ? 'rgba(235, 22, 35, 0.14)' : '#131720',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 0 18px rgba(235, 22, 35, 0.2)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <div style={{ color: isSelected ? '#ff2a38' : '#94a3b8', flexShrink: 0 }}>
                        {isSelected ? <CheckSquare size={20} /> : <Square size={20} />}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                          {service.name}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {service.desc}
                        </div>
                      </div>
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: isSelected ? '#ff2a38' : '#cbd5e1', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                      ₹{service.price.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Calculation Summary */}
            <SpotlightCard
              style={{
                background: '#141822',
                borderRadius: '14px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
                  Custom Bundle Summary
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#94a3b8' }}>
                    <span>Selected Services ({selectedIds.length})</span>
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>₹{rawTotal.toLocaleString()}</span>
                  </div>
                  {isBundle && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#ff2a38', fontWeight: 600 }}>
                      <span>Bundle Discount</span>
                      <span>-₹{savings.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 700, color: '#ffffff' }}>Total Price:</span>
                    <span key={animatingKey} className="number-pop" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', fontWeight: 900, color: '#ff2a38', fontFamily: 'var(--font-heading)', textShadow: '0 0 15px rgba(235, 22, 35, 0.4)' }}>
                      ₹{finalPrice.toLocaleString()}
                    </span>
                  </div>
                  {savings > 0 && (
                    <div style={{ fontSize: '0.76rem', color: '#ff4d5a', marginTop: '4px', textAlign: 'right', fontWeight: 600 }}>
                      You save ₹{savings.toLocaleString()} on this custom bundle!
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenContact(`Custom Career Package (${selectedIds.length} services - ₹${finalPrice})`)}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '12px',
                  fontSize: '0.92rem',
                }}
              >
                Enroll in Custom Bundle <ArrowRight size={16} />
              </button>
            </SpotlightCard>

          </div>
        </div>

        {/* =========================================================================
            INSTITUTIONAL WORKSHOPS (FROM BUSINESS PROFILE PDF)
           ========================================================================= */}
        <div
          style={{
            background: '#11141b',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: 'clamp(20px, 4vw, 32px)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="badge badge-rose" style={{ marginBottom: '8px' }}>
              <School size={13} /> Institutional Programs
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
              Workshops & Seminars for Schools and Colleges
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.84rem' }}>
              Structured curriculum delivered by certified trainers to prepare students for the modern hiring landscape.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {/* School Workshops */}
            <div style={{ background: '#161b24', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623' }}>
                  <School size={20} />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  School Workshops (Classes 9-12)
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                <div>• Career Options After 10th (Streams & Prospects)</div>
                <div>• Career Options After 12th (Entrance & Paths)</div>
                <div>• Future Careers in Artificial Intelligence</div>
                <div>• Cybersecurity Career Opportunities & Ethics</div>
              </div>
            </div>

            {/* College Workshops */}
            <div style={{ background: '#161b24', borderRadius: '12px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623' }}>
                  <GraduationCap size={20} />
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  College Placement Masterclasses
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                <div>• Resume Building Masterclass (ATS Optimization)</div>
                <div>• LinkedIn Optimization & Personal Branding</div>
                <div>• Technical & HR Interview Preparation</div>
                <div>• Complete Job Readiness Program for Graduates</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={CAREER_SLIDES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
