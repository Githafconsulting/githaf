
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { QuoteGenerator } from '@/components/quote-generator';

const CustomQuoteGenerator = () => {
  useEffect(() => {
    console.log("CustomQuoteGenerator page mounted");
  }, []);

  return (
    <Layout title="Custom Quote Generator | Githaf Consulting" description="Create a customized service package based on your consultation and specific needs.">
      <div className="container mx-auto py-10">
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
