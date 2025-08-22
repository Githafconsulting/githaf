
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../Button';
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using the mailto URI scheme
      const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      );
      
      // Open the mailto link
      window.open(`mailto:info@githafconsulting.com?subject=${subject}&body=${body}`);
      
      console.log('Form submitted:', formData);
      
      // Show success message
      toast.success("Thank you for your message! We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("There was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enhanced-card p-8">
      <h3 className="text-xl font-semibold mb-6 text-white">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Your Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 border border-white/10"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 border border-white/10"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company Name
          </label>
          <input 
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 border border-white/10"
            placeholder="ABC Corporation"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Your Message
          </label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all duration-300 border border-white/10 resize-none"
            placeholder="How can we help you transform your business?"
          />
        </div>
        
        <Button 
          type="submit"
          variant="primary"
          className="w-full mt-6"
          disabled={isSubmitting}
          icon={isSubmitting ? <div className="animate-spin">⚪</div> : <Send size={16} />}
          iconPosition="right"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        
      </form>
    </div>
  );
};

export default ContactForm;
