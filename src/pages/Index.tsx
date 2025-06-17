
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/services/ServicesSection';
import OurApproachSection from '@/components/OurApproachSection';
import AIAdoptionSection from '@/components/AIAdoptionSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';

const Index = () => {
  return (
    <Layout
      title="Githaf Consulting - AI and Digital Transformation Experts | Custom Business Solutions"
      description="Githaf Consulting provides strategic AI implementation, digital transformation, and business consulting services to help companies increase revenue and gain competitive advantage."
    >
      <article>
        <Hero />
        <CompanyTicker />
        <div className="space-y-0">
          <ServicesSection />
          <OurApproachSection />
          <AIAdoptionSection />
          <AboutSection />
          <ContactSection />
        </div>
      </article>
    </Layout>
  );
};

export default Index;
