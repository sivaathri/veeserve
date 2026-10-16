import React from 'react';

export default function ProblemsSection() {
  const problems = [
    {
      num: '01',
      tag: 'FEAR',
      title: 'The Rejection Nightmare',
      desc: 'A visa refusal can affect future applications and create unnecessary stress before every trip.',
    },
    {
      num: '02',
      tag: 'MONEY',
      title: 'Non-Refundable Fees Lost',
      desc: 'Visa fees, translations, attestations and supporting documents often become wasted expenses.',
    },
    {
      num: '03',
      tag: 'CHAOS',
      title: 'Conflicting Information',
      desc: 'Forums, agencies and embassy websites often provide different guidance, creating confusion.',
    },
    {
      num: '04',
      tag: 'SLOTS',
      title: 'VFS Appointment Scarcity',
      desc: 'Embassy appointment slots disappear in minutes. Missing your window can delay your entire trip.',
    },
    {
      num: '05',
      tag: 'HISTORY',
      title: 'Previous Rejection Stigma',
      desc: 'A previous refusal doesn’t disappear. Embassies often expect applicants to address past issues clearly.',
    },
    {
      num: '06',
      tag: 'TIME',
      title: 'Hours Wasted on Paperwork',
      desc: 'Cover letters, itineraries, bank statements and embassy requirements create a lengthy process.',
    },
  ];

  return (
    <section className="visa-problem-section" id="problems">
      <div className="visa-problem-container">
        {/* Sticky Left Card */}
        <div className="visa-problem-left">
          <div className="visa-problem-badge">THE PROBLEM WE SOLVE</div>
          <h2 className="visa-problem-title">
            We Know Exactly What
            <span>Keeps You Up at Night</span>
          </h2>
          <p className="visa-problem-description">
            UAE residents lose over AED 21 million in non-refundable visa fees every year due to
            avoidable documentation mistakes, missed embassy requirements, and rejected applications.
          </p>
          <p className="visa-problem-description">
            Every embassy evaluates applications differently based on nationality, residency status,
            travel history, financial profile, and supporting documents.
          </p>
        </div>

        {/* Right 6 Problem Cards */}
        <div className="visa-problem-right">
          {problems.map((prob) => (
            <div key={prob.num} className="visa-problem-card">
              <div className="visa-problem-number">{prob.num}</div>
              <div className="visa-problem-content">
                <h3>{prob.tag}</h3>
                <h4>{prob.title}</h4>
                <p>{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
