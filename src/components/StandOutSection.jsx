import React from 'react';

export default function StandOutSection() {
  const standOutItems = [
    {
      icon: 'fa-solid fa-magnifying-glass',
      title: 'Free Visa Eligibility Check',
    },
    {
      icon: 'fa-solid fa-user-tie',
      title: 'One-to-One Visa Consultant Support',
    },
    {
      icon: 'fa-solid fa-folder-open',
      title: 'End-to-End Documentation Assistance',
    },
    {
      icon: 'fa-solid fa-check-double',
      title: 'Expert Review & Verification of All Documents',
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Fast, Smooth & Stress-Free Visa Processing',
    },
  ];

  return (
    <section className="process-section" id="stand-out">
      <div className="process-heading">
        <h2>
          HOW WE <span>STAND OUT</span>
        </h2>
        <p>
          Before we touch your application, our visa agency in Dubai conducts a thorough
          pre-submission audit. We check your eligibility, financial proof, and travel history
          against the exact standards and requirements set by your destination embassy.
        </p>
      </div>

      <div className="process-grid">
        {standOutItems.map((item, idx) => (
          <div key={idx} className="process-item">
            <div className="icon-wrap">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
