
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/80 via-[#16213e]/60 to-[#6b2c91]/40"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 glass-dark"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">
            Let's <span className="gradient-text">Transform</span> Your Business
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to harness the power of AI? Get in touch with our experts and start your digital transformation journey today.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="reveal">
              <ContactInfo />
            </div>
            
            {/* Contact form */}
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
