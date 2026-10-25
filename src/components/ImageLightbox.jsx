import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

export default function ImageLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNavigate,
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset zoom state whenever currentIndex or isOpen changes
  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    // Capture exact scroll position so background does not move
    const savedScrollY = window.scrollY || window.pageYOffset || 0;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Lock page scroll behind the modal
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      // Ensure the scroll position is exactly preserved
      if (typeof window.scrollTo === 'function') {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      }
    };
  }, [isOpen, currentIndex, images, onClose, onNavigate]);

  if (!isOpen || !images || images.length === 0 || typeof document === 'undefined') return null;

  const currentItem = images[currentIndex] || images[0] || {};
  const imgSrc = typeof currentItem === 'string' ? currentItem : (currentItem.src || currentItem.image || '');
  const imgTitle = typeof currentItem === 'string' ? `Slide ${currentIndex + 1} of ${images.length}` : (currentItem.title || `Slide ${currentIndex + 1} of ${images.length}`);
  const imgCategory = typeof currentItem === 'string' ? 'Official Asset' : (currentItem.category || 'Official Asset');
  const imgSubtitle = typeof currentItem === 'string' ? '' : (currentItem.subtitle || '');

  const lightboxContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imgTitle}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999, // Super high z-index to stay above navbars and transform layers
        background: 'rgba(5, 7, 10, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(10px, 2.5vw, 20px)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        animation: 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
          zIndex: 40,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '12px',
          gap: '16px',
          flexShrink: 0,
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
                flexShrink: 0,
              }}
            >
              {imgCategory}
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
              {imgTitle}
            </h3>
          </div>
          {imgSubtitle && (
            <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {imgSubtitle}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', marginRight: '6px', fontWeight: 600 }}>
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            title={isZoomed ? "Reset Zoom" : "Zoom In (1.4x)"}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: isZoomed ? 'rgba(235, 22, 35, 0.2)' : '#161b24',
              border: isZoomed ? '1px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.12)',
              color: isZoomed ? '#ff2a38' : '#ffffff',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
          </button>
          {imgSrc && (
            <a
              href={imgSrc}
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
          )}
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

      {/* Main Image Stage - Centered in Viewport */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '12px 0',
          minHeight: 0,
          width: '100%',
          overflow: isZoomed ? 'auto' : 'hidden',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: 'clamp(8px, 2.5vw, 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              background: 'rgba(20, 24, 34, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eb1623';
              e.currentTarget.style.borderColor = '#eb1623';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 24, 34, 0.88)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: 'clamp(8px, 2.5vw, 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 30,
              background: 'rgba(20, 24, 34, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7)',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#eb1623';
              e.currentTarget.style.borderColor = '#eb1623';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(20, 24, 34, 0.88)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* The Slide / Image Container */}
        <div
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isZoomed ? 'scale(1.4)' : 'scale(1)',
            cursor: isZoomed ? 'zoom-out' : 'zoom-in',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            } else {
              setIsZoomed((prev) => !prev);
            }
          }}
          title={isZoomed ? "Click to zoom out" : "Click image to zoom in"}
        >
          <img
            src={imgSrc}
            alt={imgTitle}
            style={{
              maxWidth: 'min(90vw, 1300px)',
              maxHeight: images.length > 1 ? 'calc(100vh - 180px)' : 'calc(100vh - 120px)',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '10px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 45px rgba(235, 22, 35, 0.22)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              userSelect: 'none',
              display: 'block',
            }}
          />
        </div>
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
            paddingTop: '8px',
            paddingBottom: '2px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            maxWidth: '100%',
            flexShrink: 0,
          }}
        >
          {images.map((item, idx) => {
            const thumbSrc = typeof item === 'string' ? item : (item.src || item.image || '');
            const thumbTitle = typeof item === 'string' ? `Slide ${idx + 1}` : (item.title || `Thumbnail ${idx + 1}`);
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(idx)}
                title={thumbTitle}
                style={{
                  width: 'clamp(48px, 6vw, 76px)',
                  height: 'clamp(32px, 4vw, 48px)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  flexShrink: 0,
                  opacity: isActive ? 1 : 0.45,
                  border: isActive ? '2px solid #eb1623' : '1px solid rgba(255, 255, 255, 0.2)',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  boxShadow: isActive ? '0 0 12px rgba(235, 22, 35, 0.5)' : 'none',
                  transition: 'all 0.2s ease',
                  background: '#0a0d14',
                }}
              >
                <img
                  src={thumbSrc}
                  alt={thumbTitle}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return createPortal(lightboxContent, document.body);
}
