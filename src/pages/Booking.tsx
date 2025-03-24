
import React from 'react';
import Layout from '@/components/Layout';
import BookingSystem from '@/components/BookingSystem';

const Booking = () => {
  return (
    <Layout
      title="Book a Consultation | Githaf Consulting - AI and Digital Transformation Experts"
      description="Schedule a consultation with Githaf Consulting's experts. We provide strategic AI implementation and digital transformation services to help your business grow."
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Book a Consultation</h1>
        <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Schedule a meeting with our experts to discuss how we can help your business 
          leverage AI and digital transformation to gain a competitive advantage.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <BookingSystem />
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
