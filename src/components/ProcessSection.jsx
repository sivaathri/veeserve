import React, { useState } from 'react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Free Eligibility Check',
      content:
        'Tell us your passport, destination and travel dates. We assess your profile honestly and identify any risks before you proceed.',
      link: 'https://wa.me/971509434364?text=Hi%2C%20I%20would%20like%20a%20Free%20Eligibility%20Check',
    },
    {
      num: '02',
      title: 'Document Audit',
      content:
        'Every document is checked against the latest embassy requirements to eliminate avoidable mistakes.',
      link: 'https://wa.me/971509434364?text=Hi%2C%20I%20need%20a%20Document%20Audit%20for%20my%20visa',
    },
    {
      num: '03',
      title: 'Application Build',
      content:
        'We prepare your forms, cover letters, itinerary and supporting documents for embassy readiness.',
      link: 'https://wa.me/971509434364?text=Hi%2C%20I%20want%20to%20build%20my%20visa%20application',
    },
    {
      num: '04',
      title: 'Submit & Track',
      content:
        'We manage appointment booking, submission and ongoing tracking until a final decision is received.',
      link: 'https://wa.me/971509434364?text=Hi%2C%20I%20need%20help%20with%20appointment%20submission%20and%20tracking',
    },
  ];

  return (
    <section className="how-it-works" id="process">
      <div className="container">
        <div className="section-top">
          <div>
            <span className="subtitle">HOW IT WORKS</span>
            <h2>
              From "Where Do I Start?" <br />
              to Boarding Pass in 4 Steps
            </h2>
          </div>
          <p className="section-desc">
            A clear and transparent process designed to maximize approval chances while keeping you
            informed at every stage.
          </p>
        </div>

        <div className="steps-list">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`step-item ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
            >
              <div className="step-title">
                <span>{step.num}</span>
                {step.title}
              </div>
              <div className="step-content">{step.content}</div>
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="step-arrow"
                aria-label={`Inquire about Step ${step.num}: ${step.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
