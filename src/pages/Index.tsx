
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
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
