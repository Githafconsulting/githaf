
import React from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
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
