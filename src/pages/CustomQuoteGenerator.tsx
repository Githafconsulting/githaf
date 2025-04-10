
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { QuoteGenerator } from '@/components/quote-generator';

const CustomQuoteGenerator = () => {
  useEffect(() => {
    console.log("CustomQuoteGenerator page mounted");
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
    <Layout title="Custom Quote Generator | Githaf Consulting" description="Create a customized service package based on your consultation and specific needs.">
      <div className="container mx-auto py-10 w-full" style={{display: 'block', width: '100%', maxWidth: '1200px'}}>
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Create a customized service package based on your consultation and specific needs.
          </p>
        </div>
        
        <QuoteGenerator />
      </div>
    </Layout>
  );
};

export default CustomQuoteGenerator;
