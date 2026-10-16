import React from 'react';

export default function PromotionalSections() {
  return (
    <section className="promo-section" id="promos">
      <div className="promo-grid">
        {/* UK Urgent Visa Banner */}
        <div className="promo-card">
          <div>
            <h2>Get your UK visa within a day !</h2>
            <p>
              No more delay for the UK visa. Your{' '}
              <a
                href="https://veeserve.ae/united-kingdom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                urgent UK visit visa from dubai
              </a>{' '}
              is ready within a day. WhatsApp us now to take your UK visa.
            </p>
          </div>
          <a
            href="https://wa.me/971509434364?text=Can%20I%20get%20more%20details%20on%20UK%20visa%20process"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
          </a>
        </div>

        {/* US Early Appointments Banner */}
        <div className="promo-card">
          <div>
            <h2>US early appointments in 30 days !</h2>
            <p>
              Tired of waiting for your US appointment date? Now get your{' '}
              <a
                href="https://veeserve.ae/united-states-of-america/"
                target="_blank"
                rel="noopener noreferrer"
              >
                urgent USA visit visa from UAE
              </a>{' '}
              appointment within 30 days. Contact us now.
            </p>
          </div>
          <a
            href="https://wa.me/971509434364?text=Can%20I%20get%20more%20details%20on%20US%20visa%20process"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
