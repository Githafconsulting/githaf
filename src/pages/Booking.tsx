
import React from 'react';
import Layout from '@/components/Layout';
import BookingSystem from '@/components/BookingSystem';
import { CalendarCheck } from 'lucide-react';

const Booking = () => {
  return (
    <Layout
      title="Book a Consultation | Githaf Consulting - AI and Digital Transformation Experts"
      description="Schedule a consultation with Githaf Consulting's experts. We provide strategic AI implementation and digital transformation services to help your business grow."
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book a Consultation</h1>
          <div className="flex items-center justify-center mb-4">
            <CalendarCheck className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg font-medium">Directly linked to our Google Calendar</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a meeting with our experts to discuss how we can help your business 
            leverage AI and digital transformation to gain a competitive advantage.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <BookingSystem />
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
