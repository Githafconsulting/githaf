
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Booking information handler
export const handleBookingQuery = () => {
  return (
    <div className="space-y-2">
      <p>I'd be happy to help you schedule a consultation with our AI transformation experts!</p>
      <p>Our consultations typically cover:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Assessment of your current business processes</li>
        <li>Identification of AI implementation opportunities</li>
        <li>Discussion of potential solutions and approaches</li>
        <li>Preliminary timeline and investment estimates</li>
      </ul>
      <div className="flex justify-center mt-3">
        <Button asChild>
          <Link to="/booking" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Book Your Free Consultation
          </Link>
        </Button>
      </div>
    </div>
  );
};
