import React, { useState, useEffect } from 'react';

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Consultation Pill */}
      <div className="floating-consultation-bar">
        <a
          href="https://wa.me/+971509434364"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
          aria-label="WhatsApp Us for Free Consultation"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href="https://wa.me/+971509434364"
          target="_blank"
          rel="noopener noreferrer"
          className="consultation-text"
        >
          Get Free Consultation
        </a>
        <a
          href="tel:+971509434364"
          className="phone-icon"
          aria-label="Call Veeserve Advisor"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
