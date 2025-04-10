
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Calendar, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { EmailSetter, MessagesSetter, BooleanSetter, Message } from '../../types';

// Contact information handler
export const handleContactQuery = () => {
  return (
    <div className="space-y-2">
      <p>You can connect with our AI transformation team through these channels:</p>
      <div className="space-y-2">
        <p className="flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <a href="tel:+971562078508" className="text-primary hover:underline">+971 562078508</a> (UAE)
        </p>
        <p className="flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <a href="tel:+447530551944" className="text-primary hover:underline">+44 7530551944</a> (UK)
        </p>
        <p className="flex items-center">
          <Mail className="h-4 w-4 mr-2" />
          <a href="mailto:gravitasitconsulting@gmail.com" className="text-primary hover:underline">gravitasitconsulting@gmail.com</a>
        </p>
      </div>
      <p className="mt-2">Would you prefer that an AI specialist contact you directly?</p>
    </div>
  );
};

// Lead capture handler
export const handleLeadCaptureQuery = (
  email: string, 
  setEmail: EmailSetter, 
  setLeadCapture: BooleanSetter, 
  setMessages: MessagesSetter
) => {
  return (
    <div className="space-y-3">
      <p>I'd be happy to have one of our AI consultants reach out to you. Could you share your email address so we can get in touch?</p>
      
      <div className="mt-2 space-y-2">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full p-2 border rounded text-sm"
        />
        <Button 
          size="sm" 
          className="w-full" 
          onClick={() => {
            if (email && email.includes('@')) {
              toast.success("Thank you! Our team will contact you shortly.");
              setLeadCapture(true);
              setMessages(prev => [...prev, { 
                id: prev.length + 1, 
                content: <p>Thanks for your interest! One of our AI specialists will reach out to you at <strong>{email}</strong> within 24 hours. In the meantime, you might want to <Link to="/booking" className="text-primary font-medium hover:underline">book a consultation</Link> to discuss your specific business needs.</p>, 
                isBot: true 
              }]);
            } else {
              toast.error("Please enter a valid email address");
            }
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
