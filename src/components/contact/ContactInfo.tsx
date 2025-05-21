
import React from 'react';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactInfo: React.FC = () => {
  // Email address split into parts to prevent easy scraping
  const emailParts = ['info', 'githafconsulting.com'];

  return (
    <div>
      <h2 className="mb-6">Get In Touch</h2>
      <p className="text-base text-muted-foreground mb-8">
        Ready to start your AI and digital transformation journey? Contact us today to schedule a consultation and discover how we can help your business thrive in the digital age.
      </p>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="p-3 rounded-lg bg-primary/10 mr-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-base font-semibold mb-1">Email Us</h4>
            <p className="text-muted-foreground select-none" aria-label="Email address">
              <span>{emailParts[0]}</span>
              <span>@</span>
              <span>{emailParts[1]}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-3 rounded-lg bg-primary/10 mr-4">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-base font-semibold mb-1">Our Presence</h4>
            <p className="text-muted-foreground">
              UAE, UK
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-3 rounded-lg bg-primary/10 mr-4">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-base font-semibold mb-1">Book a Consultation</h4>
            <p className="text-muted-foreground">
              <Link to="/booking" className="text-primary hover:underline">
                Schedule a meeting with our experts
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-background border rounded-xl">
        <h4 className="text-lg font-semibold mb-3">Office Hours (UK and UAE)</h4>
        <div className="space-y-2 text-muted-foreground">
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
