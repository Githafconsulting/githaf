
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CompanyTicker />
      <div className="space-y-0">
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
