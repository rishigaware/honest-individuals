import React, { useState, useRef } from 'react';
import { Users, Code, ShieldCheck, Database, Lock, Cpu } from 'lucide-react';

export default function ArchitectureStack({ onNavigate }) {
  const [activeLayer, setActiveLayer] = useState(null);
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 8, // subtle 8deg max tilt
      y: -y * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setActiveLayer(null);
  };

  const layers = [
    {
      id: 'client',
      title: 'CLIENT',
      icon: <Users size={16} />,
      color: '#3b82f6',
      bgGradient: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
      shadowColor: 'rgba(37, 99, 235, 0.4)',
      borderColor: '#93c5fd',
      specs: 'Edge CDN • Responsive Next/React • Sub-50ms Latency',
      tabTarget: 'services',
    },
    {
      id: 'app',
      title: 'APPLICATION',
      icon: <Code size={16} />,
      color: '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      shadowColor: 'rgba(124, 58, 237, 0.4)',
      borderColor: '#c4b5fd',
      specs: 'Microservices • Node.js / Express • Dynamic SSR Engine',
      tabTarget: 'services',
    },
    {
      id: 'api',
      title: 'SECURE API LAYER',
      icon: <ShieldCheck size={16} />,
      color: '#0284c7',
      bgGradient: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
      shadowColor: 'rgba(2, 132, 199, 0.4)',
      borderColor: '#7dd3fc',
      specs: 'OWASP Verified • JWT & RBAC Auth • BOLA / IDOR Protected',
      tabTarget: 'cybersecurity',
    },
    {
      id: 'data',
      title: 'DATA LAYER',
      icon: <Database size={16} />,
      color: '#10b981',
      bgGradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
      shadowColor: 'rgba(16, 185, 129, 0.4)',
      borderColor: '#6ee7b7',
      specs: 'Encrypted at Rest (AES-256) • Redis Cache • ACID Compliance',
      tabTarget: 'cybersecurity',
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="architecture-container"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        padding: '24px 16px',
        perspective: '1000px',
      }}
    >
      {/* Ambient Neon Floor Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '90px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37, 99, 235, 0.22) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 80%)',
          filter: 'blur(20px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* 3D Isometric Stack */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          transform: `rotateX(${16 + tilt.y}deg) rotateY(${-12 + tilt.x}deg) rotateZ(2deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {layers.map((layer, index) => {
          const isHovered = activeLayer === layer.id;
          const isClient = layer.id === 'client';
          const isData = layer.id === 'data';

          return (
            <React.Fragment key={layer.id}>
              {/* Layer Slab Card */}
              <div
                onMouseEnter={() => setActiveLayer(layer.id)}
                onClick={() => onNavigate && onNavigate(layer.tabTarget)}
                style={{
                  position: 'relative',
                  width: isClient ? '70%' : isData ? '96%' : index === 1 ? '80%' : '88%',
                  cursor: 'pointer',
                  transform: isHovered ? 'translateZ(20px) translateY(-6px) scale(1.03)' : 'translateZ(0px)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  zIndex: 10 - index,
                }}
              >
                {/* 3D Glass Slab Top Face */}
                <div
                  style={{
                    background: layer.bgGradient,
                    borderRadius: '14px',
                    padding: '14px 20px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: isHovered
                      ? `0 14px 28px -4px ${layer.shadowColor}, 0 0 20px ${layer.color}`
                      : `0 8px 20px -4px ${layer.shadowColor}`,
                    border: `1.5px solid ${isHovered ? '#ffffff' : layer.borderColor}`,
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Subtle Top Glass Reflection */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)',
                      borderRadius: '13px 13px 0 0',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon & Label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1 }}>
                    <span style={{ display: 'inline-flex', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
                      {layer.icon}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: '0.86rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                      }}
                    >
                      {layer.title}
                    </span>
                  </div>
                </div>

                {/* 3D Bottom Slab Bevel / Extrusion */}
                <div
                  style={{
                    height: '10px',
                    marginTop: '-4px',
                    background: 'rgba(15, 23, 42, 0.45)',
                    borderRadius: '0 0 14px 14px',
                    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.5)',
                  }}
                />

                {/* Hover Specs Tooltip */}
                {isHovered && (
                  <div
                    className="number-pop"
                    style={{
                      position: 'absolute',
                      top: '-32px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#0f172a',
                      color: '#f8fafc',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                      border: '1px solid #334155',
                      zIndex: 30,
                    }}
                  >
                    <span style={{ color: layer.borderColor }}>●</span> {layer.specs}
                  </div>
                )}
              </div>

              {/* Glowing Fiber-Optic Connector Pulse Beam (Between Layers) */}
              {index < layers.length - 1 && (
                <div
                  style={{
                    width: '3px',
                    height: '14px',
                    background: 'linear-gradient(180deg, #60a5fa 0%, #38bdf8 50%, #34d399 100%)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)',
                    position: 'relative',
                  }}
                >
                  {/* Flowing Laser Data Packet */}
                  <span
                    className="beam-pulse-dot"
                    style={{
                      position: 'absolute',
                      top: '0%',
                      left: '-2.5px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      boxShadow: '0 0 10px #38bdf8, 0 0 4px #ffffff',
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Floating Connected Satellite Tech Tags */}
      {/* Left Tags */}
      <div
        className="satellite-tag tag-react"
        style={{
          position: 'absolute',
          top: '18%',
          left: '-10px',
          zIndex: 15,
        }}
        onClick={() => onNavigate && onNavigate('services')}
      >
        <span className="circuit-dot blue" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-main)' }}>React</span>
      </div>

      <div
        className="satellite-tag tag-next"
        style={{
          position: 'absolute',
          top: '42%',
          left: '-15px',
          zIndex: 15,
          animationDelay: '-2s',
        }}
        onClick={() => onNavigate && onNavigate('services')}
      >
        <span className="circuit-dot purple" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-main)' }}>Next.js</span>
      </div>

      <div
        className="satellite-tag tag-security"
        style={{
          position: 'absolute',
          bottom: '22%',
          left: '-5px',
          zIndex: 15,
          animationDelay: '-4s',
        }}
        onClick={() => onNavigate && onNavigate('cybersecurity')}
      >
        <span className="circuit-dot cyan" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
          <Lock size={11} /> Security
        </span>
      </div>

      {/* Right Tags */}
      <div
        className="satellite-tag tag-node"
        style={{
          position: 'absolute',
          top: '25%',
          right: '-10px',
          zIndex: 15,
          animationDelay: '-1.5s',
        }}
        onClick={() => onNavigate && onNavigate('services')}
      >
        <span className="circuit-dot green" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-main)' }}>Node.js</span>
      </div>

      <div
        className="satellite-tag tag-api"
        style={{
          position: 'absolute',
          top: '52%',
          right: '-15px',
          zIndex: 15,
          animationDelay: '-3.5s',
        }}
        onClick={() => onNavigate && onNavigate('cybersecurity')}
      >
        <span className="circuit-dot cyan" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-main)' }}>
          <Cpu size={11} /> API
        </span>
      </div>

      <div
        className="satellite-tag tag-cloud"
        style={{
          position: 'absolute',
          bottom: '18%',
          right: '-5px',
          zIndex: 15,
          animationDelay: '-5s',
        }}
        onClick={() => onNavigate && onNavigate('services')}
      >
        <span className="circuit-dot blue" />
        <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--accent-primary)' }}>Cloud</span>
      </div>
    </div>
  );
}
