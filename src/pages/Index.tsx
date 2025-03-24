
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="space-y-0">
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
