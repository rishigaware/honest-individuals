import React, { useState, useEffect } from 'react';
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
    background: '#ffffff',
    border: '1px solid var(--border-medium)',
    color: 'var(--text-main)',
    fontSize: '16px', /* 16px prevents iOS Safari auto-zoom on input focus */
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--text-main)',
    marginBottom: '5px',
  };

  return (
    <>
      {/* Embedded Contact Section on Main Page / Dedicated Tab */}
      <section id="contact" className="section-padding" style={{ position: 'relative', background: '#f8fafc', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(20px, 3.5vw, 32px) auto' }}>
            <span className="badge badge-cyan" style={{ marginBottom: '10px' }}>
              <MessageSquareQuote size={12} /> Direct Contact & Consultation
            </span>
            <h2 style={{ fontSize: 'clamp(1.18rem, 1.8vw, 1.45rem)', fontWeight: 800, marginBottom: '8px' }}>
              Let's Build Something <span className="gradient-text-cyan">Exceptional Together</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
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
            <SpotlightCard className="panel-padding" style={{ background: '#ffffff', textAlign: 'center', padding: '14px 12px' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'var(--accent-primary-light)', color: 'var(--accent-primary)', marginBottom: '6px' }}>
                <Phone size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>Direct WhatsApp / Call</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>Instant Project Scoping</div>
            </SpotlightCard>

            <SpotlightCard className="panel-padding" style={{ background: '#ffffff', textAlign: 'center', padding: '14px 12px' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'var(--accent-purple-light)', color: 'var(--accent-purple)', marginBottom: '6px' }}>
                <Mail size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>Official RFPs & NDAs</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>Formal Scope Documents</div>
            </SpotlightCard>

            <SpotlightCard className="panel-padding" style={{ background: '#ffffff', textAlign: 'center', padding: '14px 12px' }}>
              <div style={{ display: 'inline-flex', padding: '8px', borderRadius: '50%', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', marginBottom: '6px' }}>
                <Clock size={16} />
              </div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>24-Hour SLA</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '2px' }}>Direct MD Review & Response</div>
            </SpotlightCard>
          </div>

          {/* Form Card */}
          <SpotlightCard className="panel-padding" style={{ maxWidth: '780px', margin: '0 auto', background: '#ffffff' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'clamp(20px, 4vw, 36px) 10px' }}>
                <div style={{ padding: '10px', borderRadius: '50%', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', display: 'inline-block', marginBottom: '12px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', maxWidth: '500px', margin: '0 auto 16px auto', lineHeight: 1.55 }}>
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
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-medium)';
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
                      placeholder="e.g. +91 9876543210 or email@domain.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-medium)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>
                    Primary Vertical / Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="Web Development">Web & Mobile Application Development</option>
                    <option value="Cybersecurity Audit">Offensive Cybersecurity / PenTest Audit</option>
                    <option value="Career Counseling">Career Counseling & ATS Resume Package</option>
                    <option value="Premium Career Success Package (₹9,999)">Premium Career Success Package (₹9,999)</option>
                    <option value="Enterprise Solution">Custom Enterprise Contract</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Project Details / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, desired features, scope, or target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.12)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-medium)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: '0.88rem', marginTop: '2px' }}
                >
                  Submit Inquiry <Send size={15} />
                </button>
              </form>
            )}
          </SpotlightCard>
        </div>
      </section>

      {/* Popup Modal (When triggered from consultation buttons) */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(10px, 3vw, 20px)',
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
              background: '#ffffff',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                color: 'var(--text-muted)',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f1f5f9',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px', paddingRight: '36px' }}>
              Request Proposal / Inquiry
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', marginBottom: '16px', fontWeight: 600 }}>
              Selected Focus: {initialService || 'General Consultation'}
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle2 size={36} color="var(--accent-emerald)" style={{ margin: '0 auto 10px auto' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>Inquiry Submitted!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginTop: '4px', marginBottom: '16px' }}>
                  Our MD and project leads will connect with you shortly.
                </p>
                <button onClick={handleReset} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px' }}>
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
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={14} color="var(--accent-emerald)" /> All inquiries protected under formal NDA protocols
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.86rem', marginTop: '4px' }}
                >
                  Send Inquiry <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
