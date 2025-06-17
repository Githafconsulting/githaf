
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Base background - seamless continuation from previous sections */}
      <div className="absolute inset-0 -z-10">
        {/* Base black background */}
        <div className="w-full h-full bg-black"></div>
        
        {/* White dotted pattern overlay - matching other sections */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
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
        {/* Section Container with Rounded Background */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Section Background with rounded corners */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Let's Transform Your <span className="text-purple-400">Business</span>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
