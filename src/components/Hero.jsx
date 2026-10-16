import React, { useState } from 'react';
import DestinationModal from './DestinationModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Left Column: Glass Box */}
          <div className="hero-content-col">
            <div className="glass-box">
              {/* Top gold badge banner */}
              <div className="top-banner">
                <span className="line"></span>
                <span className="text">YOUR VISA FEAR ENDS HERE.</span>
              </div>

              {/* H1 Heading */}
              <h1 className="hero-title">
                Best Visa <br />
                Consultants in Dubai
              </h1>

              {/* Supporting Copy */}
              <p className="hero-desc">
                Dubai’s trusted visa consultant in Dubai for UK, Schengen, US, Canada & 55+ destinations.
                Expert guidance, application support & free eligibility check.
              </p>

              {/* 3 Process/Support/Speed Glass Badges */}
              <div className="visa-glass-wrap">
                <div className="visa-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 4v6h6M20 20v-6h-6" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M20 9A8 8 0 0 0 6 5M4 15a8 8 0 0 0 14 4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="text-box">
                    <p className="label">PROCESS</p>
                    <h4>Simple visa steps.</h4>
                  </div>
                </div>

                <div className="visa-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="text-box">
                    <p className="label">SUPPORT</p>
                    <h4>Expert guidance.</h4>
                  </div>
                </div>

                <div className="visa-item">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="text-box">
                    <p className="label">SPEED</p>
                    <h4>Quick approvals.</h4>
                  </div>
                </div>
              </div>

              {/* Destination Selector Trigger */}
              <div className="country-selector">
                <button
                  className="country-btn"
                  onClick={() => setModalOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={modalOpen}
                >
                  <span className="country-left">
                    <span className="globe-icon">🌐</span>
                    <span>
                      {selectedCountry
                        ? `Selected: ${selectedCountry.name} ${selectedCountry.flag}`
                        : 'Choose your country'}
                    </span>
                  </span>
                  <span className="down-arrow">v</span>
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="cta-buttons">
                <a href="tel:+971509434364" className="cta-btn call-btn">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>
                  Call Now
                </a>

                <a
                  href="https://wa.me/+971509434364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn whatsapp-btn"
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#25D366"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apply for Visa Form */}
          <div className="visa-form-wrapper">
            <form onSubmit={handleSubmit} className="visa-form">
              <h2>Apply for Visa</h2>

              <label htmlFor="hero-name">NAME</label>
              <input
                id="hero-name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <label htmlFor="hero-email">EMAIL</label>
              <input
                id="hero-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <label htmlFor="hero-phone">PHONE NUMBER</label>
              <input
                id="hero-phone"
                type="tel"
                name="phone"
                placeholder="050 123 4567"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <button type="submit" disabled={submitting}>
                {submitting ? 'Processing...' : 'Start Application →'}
              </button>

              {submitted && (
                <div className="form-success-banner">
                  ✓ Application initiated! Our senior visa consultant will contact you shortly.
                </div>
              )}

              <p className="terms">
                By applying, you agree to our <u>terms</u> and <u>privacy policy</u>.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Destination Modal */}
      <DestinationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectCountry={(country) => setSelectedCountry(country)}
      />
    </section>
  );
}
