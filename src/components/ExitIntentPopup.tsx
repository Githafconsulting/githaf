import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using the mailto URI scheme
      const subject = encodeURIComponent(`Free Consultation Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\n\nProject Description:\n${formData.message || 'No details provided'}`
      );
      
      // Open the mailto link
      window.open(`mailto:info@githafconsulting.com?subject=${subject}&body=${body}`);
      
      toast({
        title: "Consultation Request Sent!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700 text-white">
        <DialogHeader className="relative">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              Wait! Before You Go...
            </DialogTitle>
            <p className="text-slate-300 text-sm">
              Get a <span className="text-purple-400 font-semibold">FREE AI consultation</span> and discover how we can transform your business
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="exit-name" className="text-sm font-medium text-slate-300">
                Name *
              </Label>
              <Input
                id="exit-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exit-email" className="text-sm font-medium text-slate-300">
                Email *
              </Label>
              <Input
                id="exit-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="exit-company" className="text-sm font-medium text-slate-300">
              Company
            </Label>
            <Input
              id="exit-company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              placeholder="Your company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exit-phone" className="text-sm font-medium text-slate-300">
              Phone
            </Label>
            <Input
              id="exit-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exit-message" className="text-sm font-medium text-slate-300">
              Brief Project Description
            </Label>
            <Textarea
              id="exit-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 resize-none"
              placeholder="Tell us about your AI needs..."
            />
          </div>

          <div className="flex pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-400">
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;