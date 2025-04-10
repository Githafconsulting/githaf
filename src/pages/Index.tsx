
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';

const Index = () => {
  useEffect(() => {
    console.log("Index page mounted");
    // Reset any conflicting styles
    document.body.style.margin = "0";
    document.body.style.padding = "0"; 
    document.body.style.width = "100%";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.overflow = "visible";
  }, []);

  return (
    <Layout
      title="Githaf Consulting - AI and Digital Transformation Experts | Custom Business Solutions"
      description="Githaf Consulting provides strategic AI implementation, digital transformation, and business consulting services to help companies increase revenue and gain competitive advantage."
    >
      <article style={{width: '100%', display: 'block'}}>
        <Hero />
        <CompanyTicker />
        <div className="space-y-0" style={{width: '100%'}}>
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      </article>
    </Layout>
  );
};

export default Index;
