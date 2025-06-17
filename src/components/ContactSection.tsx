
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Blended background - seamless continuation from previous sections */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay - matching other sections */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Subtle gradient overlay for visual variation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30"></div>
      </div>
      
      {/* Subtle floating particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Let's Transform Your Business
          </h2>
          <p className="max-w-2xl mx-auto">
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
