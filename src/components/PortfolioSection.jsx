import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import ImageLightbox from './ImageLightbox';
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
  ShieldCheck,
  Code2,
  GraduationCap,
  FileText,
  Landmark,
  CheckCircle2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import {
  PORTFOLIO_SLIDES,
  WEB_DEV_SLIDES,
  CYBER_SLIDES,
  CAREER_SLIDES,
  MSME_ASSETS,
  CLIENT_LETTERS
} from '../data/presentationAssets';

export default function PortfolioSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('portfolio');
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  // Map category to assets array
  const categoryMap = {
    portfolio: {
      name: 'Official Company Deck',
      badge: '7 Master Slides',
      icon: <Layers size={14} />,
      items: PORTFOLIO_SLIDES,
      description: 'The definitive Honest Individuals overview: lean sole-proprietor model, differentiator pillars, organization hierarchy, and core capabilities.',
    },
    'web-dev': {
      name: 'Web & App Architecture',
      badge: '15 High-Def Slides',
      icon: <Code2 size={14} />,
      items: WEB_DEV_SLIDES,
      description: 'Comprehensive solutions deck featuring corporate sites, CRM, ERP, HRMS systems, operational dashboards, and industry-specific suites.',
    },
    cyber: {
      name: 'Offensive Security VAPT',
      badge: '6 Assessment Slides',
      icon: <ShieldCheck size={14} />,
      items: CYBER_SLIDES,
      description: 'Real-world ethical hacking threat discovery, OWASP frameworks, API penetration testing, and Android APK reverse engineering validation.',
    },
    career: {
      name: 'Career & ATS Hub',
      badge: '6 Guidance Slides',
      icon: <GraduationCap size={14} />,
      items: CAREER_SLIDES,
      description: 'Student career counseling reports, ATS resume transformations, LinkedIn optimization, and college placement seminar blueprints.',
    },
    msme: {
      name: 'MSME Govt Verification',
      badge: 'Statutory Proof',
      icon: <Landmark size={14} />,
      items: MSME_ASSETS,
      description: 'Official Ministry of MSME Udyam Registration records (UDYAM-MP-13-0068161) confirming legitimate Sole Proprietor operations in Bharat.',
    },
    client: {
      name: 'Client Project Letters',
      badge: 'Signed Authorizations',
      icon: <FileText size={14} />,
      items: CLIENT_LETTERS,
      description: 'Verified authorization letters and legal safe-harbor agreements for corporate web platforms, 52-week mobile apps, and VAPT audits.',
    },
  };

  const currentCategoryData = categoryMap[activeCategory];
  const activeItems = currentCategoryData.items;
  const currentSlide = activeItems[currentDeckIndex] || activeItems[0];

  const handleCategorySwitch = (catId) => {
    setActiveCategory(catId);
    setCurrentDeckIndex(0);
  };

  const handlePrevSlide = () => {
    setCurrentDeckIndex((prev) => (prev - 1 + activeItems.length) % activeItems.length);
  };

  const handleNextSlide = () => {
    setCurrentDeckIndex((prev) => (prev + 1) % activeItems.length);
  };

  const openLightboxWithItems = (items, index) => {
    setLightboxImages(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding" style={{ position: 'relative', background: '#090b0e', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      
      {/* Background Neon Ambient Accents */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(235, 22, 35, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(184, 13, 23, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto clamp(24px, 4vw, 40px) auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              background: 'rgba(235, 22, 35, 0.14)',
              border: '1px solid rgba(235, 22, 35, 0.35)',
              color: '#ff3344',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '14px',
            }}
          >
            <Sparkles size={13} /> Official Presentations & Verified Assets
          </span>

          <h2 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.02em' }}>
            Complete Presentation Decks & <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>Project Evidence</span>
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Browse through our original presentation decks, enterprise UI architectures, offensive cybersecurity portfolios, MSME certificates, and verified client authorization letters.
          </p>

          {/* Interactive Category Selector Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px',
              flexWrap: 'wrap',
            }}
          >
            {Object.entries(categoryMap).map(([key, data]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => handleCategorySwitch(key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive ? 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)' : '#141822',
                    border: isActive ? '1px solid #ff4d5a' : '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: isActive ? '0 0 20px rgba(235, 22, 35, 0.45)' : 'none',
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {data.icon}
                  <span>{data.name}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: isActive ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      fontWeight: 700,
                    }}
                  >
                    {data.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            FEATURED SLIDE DECK VIEWER (INTERACTIVE PRESENTATION STAGE)
           ========================================================================= */}
        <div
          style={{
            background: '#11141b',
            border: '1px solid rgba(235, 22, 35, 0.28)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 30px rgba(235, 22, 35, 0.12)',
            marginBottom: '36px',
          }}
        >
          {/* Deck Header Bar */}
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              background: '#0d1017',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {currentCategoryData.badge}
              </span>
              <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                {currentSlide.title}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, marginRight: '6px' }}>
                Slide {currentDeckIndex + 1} of {activeItems.length}
              </span>

              <button
                onClick={handlePrevSlide}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#161b24',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#eb1623')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#161b24')}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNextSlide}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#161b24',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#eb1623')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#161b24')}
              >
                <ChevronRight size={18} />
              </button>

              <button
                onClick={() => openLightboxWithItems(activeItems, currentDeckIndex)}
                title="Fullscreen Zoom"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  background: 'rgba(235, 22, 35, 0.15)',
                  border: '1px solid rgba(235, 22, 35, 0.35)',
                  color: '#ff2a38',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#eb1623';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(235, 22, 35, 0.15)';
                  e.currentTarget.style.color = '#ff2a38';
                }}
              >
                <Maximize2 size={14} /> Full View
              </button>
            </div>
          </div>

          {/* Deck Body (Stage + Breakdown Info) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: '24px',
              padding: 'clamp(16px, 3vw, 28px)',
              alignItems: 'center',
            }}
          >
            {/* The Slide Display Stage with Click-to-Zoom */}
            <div
              onClick={() => openLightboxWithItems(activeItems, currentDeckIndex)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#04060a',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                aspectRatio: '16 / 9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={currentSlide.src}
                alt={currentSlide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.3)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'opacity 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <Maximize2 size={20} /> Click to Open HD Fullscreen
              </div>
            </div>

            {/* Slide Information & Value Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: '#ff2a38', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {currentSlide.category}
                </span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginTop: '4px', marginBottom: '8px' }}>
                  {currentSlide.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {currentSlide.subtitle}
                </p>
              </div>

              {/* Key Bullet Highlights from this slide */}
              {currentSlide.points && currentSlide.points.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentSlide.points.map((pt, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        background: '#161b24',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <CheckCircle2 size={16} color="#ff2a38" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.84rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => openLightboxWithItems(activeItems, currentDeckIndex)}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 15px rgba(235, 22, 35, 0.4)',
                  }}
                >
                  <Maximize2 size={15} /> Expand Full Screen
                </button>

                <a
                  href={currentSlide.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '9px 16px',
                    borderRadius: '8px',
                    background: '#161b24',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Download size={15} /> Download Slide
                </a>

                <button
                  onClick={() => onOpenContact(`Inquiry regarding ${currentSlide.title}`)}
                  style={{
                    padding: '9px 16px',
                    borderRadius: '8px',
                    background: 'transparent',
                    border: '1px solid rgba(235, 22, 35, 0.45)',
                    color: '#ff2a38',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Inquire on this Solution
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Slide Thumbnail Strip */}
          <div
            style={{
              padding: '12px 24px',
              background: '#080a0f',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, flexShrink: 0 }}>
              Deck Slides:
            </span>
            {activeItems.map((item, idx) => {
              const isSelected = idx === currentDeckIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentDeckIndex(idx)}
                  style={{
                    position: 'relative',
                    width: 'clamp(64px, 8vw, 88px)',
                    aspectRatio: '16 / 9',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    flexShrink: 0,
                    border: isSelected ? '2px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.12)',
                    opacity: isSelected ? 1 : 0.5,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isSelected ? '0 0 12px rgba(235, 22, 35, 0.5)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={item.src} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '3px',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: '#ffffff',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      padding: '1px 3px',
                      borderRadius: '3px',
                    }}
                  >
                    #{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COMPLETE GALLERY GRID OF ALL ASSETS IN THIS CATEGORY
           ========================================================================= */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                All {currentCategoryData.name} Files ({activeItems.length})
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', margin: '4px 0 0 0' }}>
                Click any thumbnail below to view full-resolution document preview.
              </p>
            </div>
            <button
              onClick={() => openLightboxWithItems(activeItems, 0)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Maximize2 size={13} /> View Slideshow (Start Slide 1)
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
              gap: '18px',
            }}
          >
            {activeItems.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => {
                  setCurrentDeckIndex(idx);
                  openLightboxWithItems(activeItems, idx);
                }}
                style={{
                  background: '#11141b',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(235, 22, 35, 0.5)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(235, 22, 35, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#050810', overflow: 'hidden' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      color: '#ffffff',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: '4px',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    Slide #{idx + 1}
                  </span>
                </div>

                <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h5
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '6px',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: '#94a3b8',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <span style={{ fontSize: '0.72rem', color: '#ff2a38', fontWeight: 600 }}>
                      Inspect Full Resolution
                    </span>
                    <Maximize2 size={13} color="#ff2a38" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
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
