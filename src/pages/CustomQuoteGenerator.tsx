
import React from 'react';
import Layout from '@/components/Layout';
import { QuoteGenerator } from '@/components/quote-generator';

const CustomQuoteGenerator = () => {
  console.log("CustomQuoteGenerator page mounted");

  return (
    <Layout title="Custom Quote Generator | Githaf Consulting" description="Create a customized service package based on your consultation and specific needs.">
      <div style={{display: 'block', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1rem'}}>
        <div style={{marginBottom: '1.5rem'}}>
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
