import React from 'react';

export default function WhyVeeserve() {
  const strategyPoints = [
    {
      num: '01',
      title: 'Pre-Submission Eligibility Audit',
      desc: 'Before we touch your application, we evaluate every possible risk factor.',
    },
    {
      num: '02',
      title: 'Passport-Specific Application Strategy',
      desc: 'Every nationality is assessed differently by embassies.',
    },
    {
      num: '03',
      title: 'Rejection-Proof Documentation',
      desc: 'We prepare documentation according to embassy standards.',
    },
    {
      num: '04',
      title: 'Daily Appointment Slot Monitoring',
      desc: 'We actively monitor VFS and embassy appointments.',
    },
    {
      num: '05',
      title: 'Rejection Rebuild Service',
      desc: 'We analyse refusals and rebuild your case with a stronger strategy.',
    },
  ];

  return (
    <section className="why-veeserve" id="about">
      <div className="veeserve-grid">
        {/* Left Column: Strategic Image */}
        <div className="why-left-image">
          <img
            src="/assets/images/why-veeserve.png"
            alt="Why Veeserve Visa Strategist"
            loading="lazy"
          />
        </div>

        {/* Hero Card */}
        <div className="hero-card">
          <div>
            <div className="badge">WHY VEESERVE</div>
            <h2>
              Not Just a <br />
              Form-Filler. <br />
              A Visa Strategist.
            </h2>
          </div>
          <div className="hero-text">
            <p>
              Most agencies submit your documents and hope for the best. We don't submit until
              we're certain. Every application undergoes a rigorous pre-submission audit.
            </p>
            <p>Your passport nationality matters to embassies. It matters to us too.</p>
          </div>
        </div>

        {/* 5 Strategy Points Grid */}
        <div className="why-points-grid">
          {strategyPoints.map((pt) => (
            <div key={pt.num} className="why-point-card">
              <span className="why-point-number">{pt.num}</span>
              <h3>{pt.title}</h3>
              <p>{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
