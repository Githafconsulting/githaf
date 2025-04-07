
import React from 'react';
import Layout from '@/components/Layout';
import { QuoteGenerator } from '@/components/quote-generator';

const CustomQuoteGenerator = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Custom Quote Generator</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create a customized service package based on your consultation and specific needs.
        </p>
        
        <QuoteGenerator />
      </div>
    </Layout>
  );
};

export default CustomQuoteGenerator;
