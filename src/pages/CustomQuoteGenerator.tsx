
import React from 'react';
import Layout from '@/components/Layout';
import { QuoteGenerator } from '@/components/quote-generator';
import Logo from '@/components/Logo';

const CustomQuoteGenerator = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-3 mb-6">
          <Logo size="lg" />
          <div>
            <h1 className="text-4xl font-bold">Githaf Custom Quote Generator</h1>
            <p className="text-lg text-muted-foreground">
              Create a customized service package based on your consultation and specific needs.
            </p>
          </div>
        </div>
        
        <QuoteGenerator />
      </div>
    </Layout>
  );
};

export default CustomQuoteGenerator;
