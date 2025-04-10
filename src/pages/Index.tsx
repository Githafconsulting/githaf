
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CompanyTicker from '@/components/CompanyTicker';

const Index = () => {
  console.log("Index page component loaded");
  
  useEffect(() => {
    console.log("Index page mounted");
    document.body.style.background = "white"; // Force background color
    return () => {
      console.log("Index page unmounted");
    };
  }, []);
  
  return (
    <Layout
      title="Githaf Consulting - AI and Digital Transformation Experts | Custom Business Solutions"
      description="Githaf Consulting provides strategic AI implementation, digital transformation, and business consulting services to help companies increase revenue and gain competitive advantage."
    >
      <div className="w-full bg-white" style={{backgroundColor: 'white'}}>
        <Hero />
        <CompanyTicker />
        <div className="w-full">
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
