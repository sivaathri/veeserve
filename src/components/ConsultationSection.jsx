import React, { useState } from 'react';

export default function ConsultationSection() {
  const [activeMode, setActiveMode] = useState('call');

  return (
    <section className="vs-consult" id="contact">
      <div className="vs-consult__hero">
        <h2 className="vs-consult__title">
          Trusted Visa Consultant in Dubai. <em>for UAE Residents</em>
        </h2>
        <p className="vs-consult__subtitle">
          Veeserve is a visa agency in Dubai offering professional visa consultancy for UAE residents
          travelling abroad. Our visa consultants handle eligibility checks, document preparation,
          appointment scheduling and application tracking, making the process organised, accurate and
          stress-free. We assist with visa applications for popular destinations including the United
          Kingdom, United States, Schengen countries, Canada, Australia, Japan, China and Turkey,
          whether you're travelling for holiday, business or family visits, with destination-specific
          guidance based on current embassy and consulate requirements. As an experienced visa
          consultancy in Dubai, we follow a structured process covering eligibility assessment,
          document review, application preparation and appointment support, helping applicants spot
          documentation gaps early and submit with confidence. Get in touch with Veeserve for
          personalised, reliable visa assistance tailored to your destination.
        </p>
      </div>

      <div className="vs-consult__body">
        <div className="vs-consult__card">
          <p className="vs-consult__label">
            Book your free consultation <span className="vs-consult__req">*</span>
          </p>

          <div className="vs-consult__modes">
            {/* Direct Call */}
            <a
              className={`vs-mode ${activeMode === 'call' ? 'is-active' : ''}`}
              href="tel:+971509434364"
              onClick={() => setActiveMode('call')}
            >
              <span className="vs-mode__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C9.6 20.6 3.4 14.4 3.4 6.9c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2 2.2z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="vs-mode__text">
                <span className="vs-mode__title">Direct Call</span>
                <span className="vs-mode__desc">+971 50 943 4364</span>
              </span>
            </a>

            {/* Online WhatsApp */}
            <a
              className={`vs-mode ${activeMode === 'online' ? 'is-active' : ''}`}
              href="https://wa.me/971509434364?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveMode('online')}
            >
              <span className="vs-mode__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="6" width="13" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M15.5 10.4 21 8v8l-5.5-2.4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="vs-mode__text">
                <span className="vs-mode__title">Online</span>
                <span className="vs-mode__desc">Chat with us on WhatsApp</span>
              </span>
            </a>

            {/* In Office */}
            <a
              className={`vs-mode ${activeMode === 'office' ? 'is-active' : ''}`}
              href="https://maps.google.com/?q=Rolex+Tower+Deira+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveMode('office')}
            >
              <span className="vs-mode__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20V6.5L12 3l8 3.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M9 20v-5.5h6V20M4 20h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="vs-mode__text">
                <span className="vs-mode__title">In Office</span>
                <span className="vs-mode__desc">Rolex Tower, Deira - Dubai</span>
              </span>
            </a>
          </div>

          {/* Urgent Callout Bar */}
          <div className="vs-consult__urgent">
            <div className="vs-urgent__left">
              <span className="vs-urgent__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C9.6 20.6 3.4 14.4 3.4 6.9c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2 2.2z"
                    fill="#fff"
                  />
                </svg>
              </span>
              <span className="vs-urgent__text">
                <span className="vs-urgent__title">Need to speak right away?</span>
                <span className="vs-urgent__desc">
                  Call our senior advisor directly at <strong>+971 50 943 4364</strong>
                </span>
              </span>
            </div>
            <a className="vs-urgent__btn" href="tel:+971509434364">
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
