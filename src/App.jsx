import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import CountriesSection from './components/CountriesSection';
import StandOutSection from './components/StandOutSection';
import WhyVeeserve from './components/WhyVeeserve';
import ProblemsSection from './components/ProblemsSection';
import PromotionalSections from './components/PromotionalSections';
import InformationalSection from './components/InformationalSection';
import ConsultationSection from './components/ConsultationSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';

export default function App() {
  return (
    <div className="site-wrapper">
      {/* 1. Header and Primary Navigation */}
      <Header />

      <main>
        {/* 2-5. Hero Section (Headline, Trust Indicators, Destination Selector, Contact CTAs, Visa Form) */}
        <Hero />

        {/* 6. Four-Step Application Process */}
        <ProcessSection />

        {/* 7. Country and Destination Links */}
        <CountriesSection />

        {/* 8. How We Stand Out Section */}
        <StandOutSection />

        {/* 9. Why Veeserve Section */}
        <WhyVeeserve />

        {/* 10. Problems the Service Solves */}
        <ProblemsSection />

        {/* 11. Promotional Visa Call-to-Action Sections */}
        <PromotionalSections />

        {/* 12. Supporting Informational Content */}
        <InformationalSection />

        {/* 13. Contact and Free Consultation Section */}
        <ConsultationSection />

        {/* 14. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 15. Footer & Floating Controls */}
      <Footer />
      <FloatingControls />
    </div>
  );
}
