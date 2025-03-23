
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="space-y-0 sm:space-y-1 md:space-y-2">
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
