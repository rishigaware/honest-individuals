import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Maximize2, ExternalLink } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNavigate,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 7, 10, 0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(12px, 3vw, 24px)',
        animation: 'fadeIn 0.25s ease forwards',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ffffff',
          zIndex: 10,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '12px',
          gap: '16px',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #eb1623 0%, #b80d17 100%)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {currentItem.category || 'Official Asset'}
            </span>
            <h3
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {currentItem.title || `Slide ${currentIndex + 1} of ${images.length}`}
            </h3>
          </div>
          {currentItem.subtitle && (
            <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
              {currentItem.subtitle}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', marginRight: '8px', fontWeight: 600 }}>
            {currentIndex + 1} / {images.length}
          </span>
          <a
            href={currentItem.src}
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Download / Open Original"
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: '#161b24',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#222938')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#161b24')}
          >
            <Download size={18} />
          </a>
          <button
            onClick={onClose}
            title="Close (Esc)"
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: 'rgba(235, 22, 35, 0.15)',
              color: '#ff2a38',
              border: '1px solid rgba(235, 22, 35, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
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
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '16px 0',
          minHeight: 0,
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Prev Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            style={{
              position: 'absolute',
              left: 'clamp(8px, 2vw, 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              background: '#141822',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eb1623';
              e.currentTarget.style.borderColor = '#eb1623';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#141822';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* The Slide / Image */}
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <img
            src={currentItem.src}
            alt={currentItem.title || 'Slide preview'}
            style={{
              maxWidth: '92vw',
              maxHeight: '74vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(235, 22, 35, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            style={{
              position: 'absolute',
              right: 'clamp(8px, 2vw, 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              background: '#141822',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eb1623';
              e.currentTarget.style.borderColor = '#eb1623';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#141822';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            maxWidth: '100%',
          }}
        >
          {images.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(idx)}
              style={{
                width: 'clamp(48px, 7vw, 76px)',
                height: 'clamp(32px, 5vw, 48px)',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                flexShrink: 0,
                opacity: idx === currentIndex ? 1 : 0.45,
                border: idx === currentIndex ? '2px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.2)',
                transform: idx === currentIndex ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.2s ease',
              }}
            >
              <img
                src={item.src}
                alt={item.title || `Thumbnail ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
