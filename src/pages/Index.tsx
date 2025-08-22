
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/services/ServicesSection';
import OurApproachSection from '@/components/OurApproachSection';
import IndustriesSection from '@/components/IndustriesSection';
import AIAdoptionSection from '@/components/AIAdoptionSection';
import AIPillarsSection from '@/components/AIPillarsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';

const Index = () => {
  const { shouldShow, dismiss } = useExitIntent({
    enabled: true,
    delay: 5000, // Wait 5 seconds before exit intent can trigger
    threshold: 10
  });

  return (
    <Layout
      title="Githaf Consulting - AI and Digital Transformation Experts | Custom Business Solutions"
      description="Githaf Consulting provides strategic AI implementation, digital transformation, and business consulting services to help companies increase revenue and gain competitive advantage."
    >
      <article>
        <Hero />
        <AIAdoptionSection />
        <AIPillarsSection />
        <CompanyTicker />
        <div className="space-y-0">
          <ServicesSection />
          <OurApproachSection />
          <IndustriesSection />
          <AboutSection />
          <ContactSection />
          <BlogSection />
          <FAQ />
        </div>
      </article>
      
      <ExitIntentPopup 
        isOpen={shouldShow} 
        onClose={dismiss} 
      />
    </Layout>
  );
};

export default Index;
