
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';

const Index = () => {
  console.log("Index page mounted");
  
  return (
    <Layout
      title="Githaf Consulting - AI and Digital Transformation Experts | Custom Business Solutions"
      description="Githaf Consulting provides strategic AI implementation, digital transformation, and business consulting services to help companies increase revenue and gain competitive advantage."
    >
      <div style={{width: '100%', display: 'block'}}>
        <Hero />
        <CompanyTicker />
        <div style={{width: '100%', display: 'block'}}>
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
