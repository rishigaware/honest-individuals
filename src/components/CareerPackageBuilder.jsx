import React, { useState } from 'react';
import { CheckSquare, Square, ArrowRight, Sparkles, Check } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

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
    <section id="career-hub" className="section-padding" style={{ position: 'relative', background: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(20px, 3.5vw, 36px) auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '10px' }}>
            <Sparkles size={12} /> Career Counseling & Growth Hub
          </span>
          <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
            Transforming Careers with <span className="gradient-text-emerald">ATS Precision & Mentorship</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
            Empowering students, fresh graduates, and working professionals to stand out in AI-screened recruitment workflows and secure high-value offers.
          </p>
        </div>

        {/* Featured Premium Package Hero Banner */}
        <div
          className="glass-panel panel-padding"
          style={{
            marginBottom: '36px',
            background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #eff6ff 100%)',
            border: '1px solid #a7f3d0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '28px', alignItems: 'center' }} className="hero-banner-grid">
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-emerald float-element">
                  <Sparkles size={13} /> Most Popular Bundle
                </span>
                <span style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 700 }}>
                  SAVE ₹1,501 IMMEDIATELY
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
                Premium Career Success Package
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.55 }}>
                The complete 360° career upgrade bundle. Guaranteed to optimize your resume for ATS systems, revamp your LinkedIn presence, prepare you for high-stakes interviews, and map your long-term career trajectory.
              </p>

              <div className="banner-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '6px 10px', marginBottom: '20px' }}>
                {[
                  'Career Counseling Report',
                  'ATS-Friendly Resume Building',
                  'LinkedIn Profile Optimization',
                  'Interview Prep & Guidance',
                  'Personal Branding Strategy',
                  'Digital Portfolio Setup'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-body)', fontWeight: 600 }}>
                    <Check size={14} color="var(--accent-emerald)" style={{ flexShrink: 0 }} /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenContact('Premium Career Success Package (₹9,999)')}
                className="btn-primary"
                style={{
                  padding: '10px 20px',
                  fontSize: '0.88rem',
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  boxShadow: '0 4px 14px rgba(5, 150, 105, 0.25)',
                }}
              >
                Claim Premium Package (₹9,999) <ArrowRight size={15} />
              </button>
            </div>

            {/* Price Box with 3D Depth */}
            <SpotlightCard
              style={{
                background: '#ffffff',
                padding: 'clamp(16px, 3vw, 22px)',
                borderRadius: '14px',
                border: '1px solid #a7f3d0',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Standalone Value: <span style={{ textDecoration: 'line-through', color: 'var(--accent-rose)' }}>₹11,500</span>
              </div>
              <div style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.35rem)', fontWeight: 900, color: 'var(--accent-emerald)', margin: '4px 0 2px 0', fontFamily: 'var(--font-heading)' }}>
                ₹9,999
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                One-time investment • Lifetime career benefit
              </div>
              <div style={{ padding: '7px 10px', borderRadius: '8px', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', fontSize: '0.76rem', fontWeight: 700 }}>
                Includes 1-on-1 Mentorship & Direct Feedback
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Custom Package Builder */}
        <div className="glass-panel panel-padding" style={{ background: '#f8fafc', border: '1px solid var(--border-subtle)' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Build Your Custom Career Package
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '4px' }}>
              Select specific services below. Bundle 4+ services to trigger an automatic 15% discount!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }} className="builder-grid">
            
            {/* Service Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {allServices.map((service) => {
                const isSelected = selectedIds.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className="builder-service-item"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      background: isSelected ? '#ffffff' : '#f1f5f9',
                      border: isSelected ? '1px solid var(--accent-emerald)' : '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                      transform: isSelected ? 'scale(1.01)' : 'scale(1)',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flexGrow: 1, minWidth: 0 }}>
                      <div style={{ color: isSelected ? 'var(--accent-emerald)' : 'var(--text-muted)', flexShrink: 0, marginTop: '2px', transition: 'transform 0.2s ease', transform: isSelected ? 'scale(1.1)' : 'scale(1)' }}>
                        {isSelected ? <CheckSquare size={19} /> : <Square size={19} />}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', wordBreak: 'break-word' }}>
                          {service.name}
                        </div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.4 }}>
                          {service.desc}
                        </div>
                      </div>
                    </div>
                    <div className="service-price" style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? 'var(--accent-emerald)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                      ₹{service.price.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Calculation Summary with Pop Animation */}
            <SpotlightCard
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: 'clamp(18px, 3vw, 24px)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                  Selected Bundle Summary
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    <span>Selected Services ({selectedIds.length})</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>₹{rawTotal.toLocaleString()}</span>
                  </div>
                  {isBundle && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                      <span>Bundle Discount</span>
                      <span>-₹{savings.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)' }}>Total Price:</span>
                    <span key={animatingKey} className="number-pop" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.55rem)', fontWeight: 900, color: 'var(--accent-emerald)', fontFamily: 'var(--font-heading)' }}>
                      ₹{finalPrice.toLocaleString()}
                    </span>
                  </div>
                  {savings > 0 && (
                    <div style={{ fontSize: '0.76rem', color: '#b45309', marginTop: '4px', textAlign: 'right', fontWeight: 600 }}>
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
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                  padding: '12px',
                  fontSize: '0.92rem',
                }}
              >
                Enroll in Custom Bundle <ArrowRight size={16} />
              </button>
            </SpotlightCard>

          </div>
        </div>

      </div>
    </section>
  );
}
