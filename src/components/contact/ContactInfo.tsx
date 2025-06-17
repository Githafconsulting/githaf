
import React from 'react';
import { Mail, MessageSquare, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactInfo: React.FC = () => {
  // Email address split into parts to prevent easy scraping
  const emailParts = ['info', 'githafconsulting.com'];

  return (
    <div className="enhanced-card p-8">
      <h2 className="mb-6 gradient-text">Get In Touch</h2>
      <p className="text-base text-white/80 mb-8 leading-relaxed">
        Ready to start your AI and digital transformation journey? Contact us today to schedule a consultation and discover how we can help your business thrive in the digital age.
      </p>
      
      <div className="space-y-6 mb-8">
        <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-start">
            <div className="p-3 rounded-lg bg-gradient-to-r from-[#6b2c91] to-[#16213e] mr-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-semibold mb-1 text-white">Email Us</h4>
              <p className="text-white/70 select-none" aria-label="Email address">
                <span>{emailParts[0]}</span>
                <span>@</span>
                <span>{emailParts[1]}</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-start">
            <div className="p-3 rounded-lg bg-gradient-to-r from-[#6b2c91] to-[#16213e] mr-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-semibold mb-1 text-white">Our Presence</h4>
              <p className="text-white/70">UAE, UK</p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex items-start">
            <div className="p-3 rounded-lg bg-gradient-to-r from-[#6b2c91] to-[#16213e] mr-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base font-semibold mb-1 text-white">Book a Consultation</h4>
              <p className="text-white/70">
                <Link to="/booking" className="text-white hover:underline">
                  Schedule a meeting with our experts
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="enhanced-card p-6 bg-white/5">
        <div className="flex items-start">
          <div className="p-3 rounded-lg bg-gradient-to-r from-[#6b2c91] to-[#16213e] mr-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Office Hours</h4>
            <div className="space-y-2 text-white/80">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
              <p className="text-sm text-white/60">(UK and UAE time zones)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
