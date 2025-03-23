
import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import Button from './Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after some time
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/3 w-1/3 h-1/3 bg-primary/5 rounded-r-full -z-10"></div>
      <div className="absolute right-0 bottom-0 w-1/4 h-1/3 bg-accent/5 rounded-tl-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="reveal">
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to start your digital transformation journey? Contact us today to schedule a consultation and discover how we can help your business thrive in the digital age.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">gravitasitconsultingltd@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+971 562078508</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-background border rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="reveal">
              <form onSubmit={handleSubmit} className="bg-background border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                      Company Name
                    </label>
                    <input 
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="ABC Corporation"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="primary"
                    className="w-full mt-2"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <div className="animate-spin">⚪</div> : <Send size={16} />}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
