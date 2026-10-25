import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Send, CheckCircle2, X, MessageSquareQuote, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function ContactSection({ isOpen, initialService, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: initialService || 'Web Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    background: '#141822',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    color: '#ffffff',
    fontSize: '16px', /* 16px prevents iOS Safari auto-zoom on input focus */
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#cbd5e1',
    marginBottom: '5px',
  };

  return (
    <>
      {/* Embedded Contact Section on Main Page / Dedicated Tab */}
      <section id="contact" className="section-padding" style={{ position: 'relative', background: '#090b0e', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(20px, 3.5vw, 32px) auto' }}>
            <span className="badge badge-rose" style={{ marginBottom: '10px' }}>
              <MessageSquareQuote size={12} /> Direct Contact & Consultation
            </span>
            <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px', color: '#ffffff' }}>
              Let's Build Something <span style={{ color: '#eb1623', textShadow: '0 0 25px rgba(235, 22, 35, 0.4)' }}>Exceptional Together</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6 }}>
              Reach out for web development quotes, offensive penetration testing authorization, or career counseling mentorship.
            </p>
          </div>

          {/* Quick Channels Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '12px',
              maxWidth: '820px',
              margin: '0 auto 24px auto',
            }}
          >
            <SpotlightCard className="panel-padding" style={{ background: '#141822', textAlign: 'center', padding: '14px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623', marginBottom: '6px' }}>
                <Phone size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>Direct WhatsApp / Call</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>Instant Project Scoping</div>
            </SpotlightCard>

            <SpotlightCard className="panel-padding" style={{ background: '#141822', textAlign: 'center', padding: '14px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(235, 22, 35, 0.12)', color: '#ff2a38', marginBottom: '6px' }}>
                <Mail size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>Official RFPs & NDAs</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>Formal Scope Documents</div>
            </SpotlightCard>

            <SpotlightCard className="panel-padding" style={{ background: '#141822', textAlign: 'center', padding: '14px 12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623', marginBottom: '6px' }}>
                <Clock size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ffffff' }}>24-Hour SLA</div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>Direct MD Review & Response</div>
            </SpotlightCard>
          </div>

          {/* Form Card */}
          <SpotlightCard className="panel-padding" style={{ maxWidth: '780px', margin: '0 auto', background: '#141822', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 30px rgba(0,0,0,0.6)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 36px) 10px' }}>
                <div style={{ padding: '10px', borderRadius: '50%', background: 'rgba(235, 22, 35, 0.12)', color: '#eb1623', display: 'inline-block', marginBottom: '12px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.86rem', maxWidth: '500px', margin: '0 auto 16px auto', lineHeight: 1.55 }}>
                  Thank you, <strong>{formData.name}</strong>. The Honest Individuals team under project MD Mr. Devesh Dhoble will review your requirements and reach out within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row">
                  <div>
                    <label style={labelStyle}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rishi Gaware"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#eb1623';
                        e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Contact Info (Phone / Email) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 9876543210 or email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#eb1623';
                        e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>
                    Project / Inquiry Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="Web Development" style={{ background: '#141822', color: '#fff' }}>Web & App Development</option>
                    <option value="Offensive Cybersecurity" style={{ background: '#141822', color: '#fff' }}>Offensive Cybersecurity & VAPT</option>
                    <option value="Career Counseling" style={{ background: '#141822', color: '#fff' }}>Career Counseling & ATS Resume</option>
                    <option value="Contractor Partnership" style={{ background: '#141822', color: '#fff' }}>Prime Contractor Partnership</option>
                    <option value="General Consultation" style={{ background: '#141822', color: '#fff' }}>General Consultation</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Requirements / Project Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your project requirements, scope, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#eb1623';
                      e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '12px',
                    fontSize: '0.92rem',
                    marginTop: '6px',
                  }}
                >
                  Submit Inquiry to Project MD <Send size={15} />
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </section>

      {/* Popup Modal (When triggered from consultation buttons) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(5, 7, 10, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px, 3vw, 24px)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            className="glass-panel panel-padding number-pop"
            style={{
              maxWidth: '520px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              position: 'relative',
              background: '#11141b',
              border: '1px solid rgba(235, 22, 35, 0.28)',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.85), 0 0 35px rgba(235, 22, 35, 0.15)',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                color: '#cbd5e1',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#161b24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#eb1623';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#161b24';
                e.currentTarget.style.color = '#cbd5e1';
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '1.16rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px', paddingRight: '36px' }}>
              Request Proposal / Inquiry
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#ff2a38', marginBottom: '16px', fontWeight: 600 }}>
              Selected Focus: {initialService || 'General Consultation'}
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <CheckCircle2 size={38} color="#ff2a38" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#ffffff' }}>Inquiry Submitted!</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '6px', marginBottom: '18px' }}>
                  Our MD and project leads will connect with you shortly.
                </p>
                <button onClick={handleReset} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#eb1623';
                      e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    WhatsApp Number / Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 or email address"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#eb1623';
                      e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Requirements / Project Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#eb1623';
                      e.target.style.boxShadow = '0 0 0 3px rgba(235, 22, 35, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: '#94a3b8' }}>
                  <ShieldCheck size={15} color="#ff2a38" /> All inquiries protected under formal NDA protocols
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.9rem', marginTop: '4px' }}
                >
                  Send Inquiry <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
