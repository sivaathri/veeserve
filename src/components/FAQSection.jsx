import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What visa services does Veeserve provide in Dubai?',
      answer:
        'Veeserve provides comprehensive visa services in Dubai for tourists, business travelers, families, and groups. Our team assists with application preparation, document checks, appointment scheduling, and other requirements based on the destination.',
    },
    {
      question: 'Which countries can I apply for a visa through Veeserve?',
      answer:
        'We assist with visa applications for several major destinations, including the USA, UK, Canada, Schengen countries, Europe, Japan, and other international destinations. Requirements vary depending on the country and visa type.',
    },
    {
      question: 'How does the visa application process work?',
      answer:
        'The process generally starts with an eligibility and document assessment. We then help prepare your application, review supporting documents, complete the required forms, and guide you through appointment and submission procedures where applicable.',
    },
    {
      question: 'Do I really need a visa consultant, or can I apply on my own?',
      answer:
        'You can apply independently. However, Schengen and UK visa fees are non-refundable, and a single documentation error — an unattested bank statement, a mismatched travel date, or a missing cover letter — can result in an expensive rejection. A Veeserve consultant eliminates these risks through a thorough pre-submission review, making the cost of our service a small fraction of what a rejection costs you.',
    },
    {
      question: 'Can Veeserve help Indian passport holders apply for a US visa from Dubai?',
      answer:
        'Yes. Indian passport holders residing in the UAE can apply for a US B1/B2 visa at the US Consulate in Dubai. We assist with DS-160 form completion, interview preparation, document verification, and appointment scheduling — including guidance on the Interview Waiver (Dropbox) programme for eligible applicants who have held a prior US visa.',
    },
    {
      question: 'Does Veeserve guarantee visa approval?',
      answer:
        'No ethical visa consultant can guarantee approval — all decisions rest solely with the embassy or consulate. What Veeserve guarantees is a rigorously prepared, embassy-ready application that gives you the strongest possible chance of success. Our track record across 5,000+ approved visas reflects that commitment.',
    },
    {
      question: 'How much does Veeserve charge for visa consulting?',
      answer:
        'Our fees vary by destination and service complexity. All engagements begin with a free eligibility check — no payment required until you decide to proceed. We provide full fee transparency upfront. No hidden charges, no last-minute additions.',
    },
    {
      question: 'How many bank statement months do I need for a UK visa from UAE?',
      answer:
        'UK Visas and Immigration typically requires 6 months of personal bank statements for a standard visitor visa application. The statements should show consistent income, no large unexplained deposits immediately before the application, and sufficient funds to cover your stay without working in the UK. UAE residents applying on non-Emirati passports are advised to show additional financial evidence to satisfy the credibility test.',
    },
    {
      question: 'What documents are required for a visa application?',
      answer:
        'Documents vary by destination and visa type but may include a valid passport, photographs, financial documents, employment or business proof, travel details, accommodation information, and other supporting documents. Our team helps you identify the requirements applicable to your application.',
    },
    {
      question: 'Can my family apply for a Schengen visa together from Dubai?',
      answer:
        'Yes. Families can submit applications together at the same VFS appointment, but each family member requires a separate application form, individual fees, and individual supporting documents. Children under 18 require additional documents including birth certificates, parental consent letters, and school NOC letters. Veeserve handles group and family applications regularly and prepares a full document checklist for every member of the travelling party.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container-custom">
        <div className="faq-header">
          <span className="subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>Veeserve Visa Services - Best Visa Agency in Dubai</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? '✕' : '+'}</span>
                </button>
                {isOpen && <div className="faq-answer">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
