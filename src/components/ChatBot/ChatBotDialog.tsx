
import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, Calendar } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  content: string | React.ReactNode;
  isBot: boolean;
}

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there! I'm your virtual assistant from Githaf Consulting. How can I help your business transform with AI today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadCapture, setLeadCapture] = useState(false);
  const [email, setEmail] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [previousQueries, setPreviousQueries] = useState<Set<string>>(new Set());

  // Autoscroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessageId = messages.length + 1;
    setMessages(prev => [...prev, { id: userMessageId, content: input, isBot: false }]);
    
    // Store this query to avoid repetitive answers
    setPreviousQueries(prev => new Set(prev).add(input.toLowerCase()));
    
    const userQuery = input;
    setInput('');
    
    // Simulate bot response
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const response = generateResponse(userQuery);
      setMessages(prev => [...prev, { id: userMessageId + 1, content: response, isBot: true }]);
    }, 1000);
  };

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Check for intent to provide contact information
    if (lowerQuery.includes('email') && lowerQuery.includes('my') || 
        lowerQuery.includes('contact me') || 
        lowerQuery.includes('get in touch') ||
        lowerQuery.includes('talk to someone')) {
      return (
        <div className="space-y-3">
          <p>I'd be happy to have one of our consultants reach out to you. Could you share your email address?</p>
          
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
                    content: <p>Thanks for your interest! A consultant will reach out to you at <strong>{email}</strong> within 24 hours. In the meantime, you might want to <Link to="/booking" className="text-primary font-medium hover:underline">book a consultation</Link> directly.</p>, 
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
    }
    
    // Lead generation focused responses
    if (lowerQuery.includes('pricing') || lowerQuery.includes('cost') || lowerQuery.includes('how much')) {
      return (
        <div className="space-y-2">
          <p>Our pricing varies based on your specific business needs and project scope. We offer custom solutions tailored to your requirements and budget.</p>
          <p>Would you like to:</p>
          <div className="flex flex-col gap-2 mt-1">
            <Button variant="outline" size="sm" asChild>
              <Link to="/booking" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Book a consultation
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={() => {
              setMessages(prev => [...prev, { 
                id: prev.length + 1, 
                content: "I'd be happy to have one of our consultants reach out to you. Could you share your email address?", 
                isBot: true 
              }]);
            }}>
              <Mail className="mr-2 h-4 w-4" />
              Request pricing info
            </Button>
          </div>
        </div>
      );
    }
    
    if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('help')) {
      return (
        <div className="space-y-2">
          <p>We specialize in:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI Agents & Automation</li>
            <li>Mobile & Web Development</li>
            <li>Payment & Fintech Solutions</li>
            <li>Digital Marketing</li>
            <li>Enterprise Transformation</li>
          </ul>
          <p className="mt-2">Which service are you most interested in for your business?</p>
        </div>
      );
    }
    
    if (lowerQuery.includes('ai') || lowerQuery.includes('artificial intelligence') || lowerQuery.includes('automation')) {
      return (
        <div className="space-y-2">
          <p>Our AI services can transform your business by automating repetitive tasks, analyzing data for insights, and creating 24/7 customer support.</p>
          <p>For example, we've helped clients:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduce customer service costs by 40% with AI chatbots</li>
            <li>Increase sales conversions by 25% with personalized recommendations</li>
            <li>Automate data entry tasks saving 20+ hours per week</li>
          </ul>
          <p className="mt-2">Would you like to explore how AI could benefit your specific business?</p>
        </div>
      );
    }
    
    if (lowerQuery.includes('book') || lowerQuery.includes('appointment') || lowerQuery.includes('schedule') || lowerQuery.includes('consultation')) {
      return (
        <div className="space-y-2">
          <p>I'd be happy to help you schedule a consultation with our team!</p>
          <div className="flex justify-center mt-2">
            <Button asChild>
              <Link to="/booking" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation Now
              </Link>
            </Button>
          </div>
        </div>
      );
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('call')) {
      return (
        <div className="space-y-2">
          <p>You can reach our team through the following channels:</p>
          <div className="space-y-1">
            <p className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+971562078508" className="text-primary hover:underline">+971 562078508</a>
            </p>
            <p className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:gravitasitconsulting@gmail.com" className="text-primary hover:underline">gravitasitconsulting@gmail.com</a>
            </p>
          </div>
          <p className="mt-2">Would you prefer that someone from our team contact you directly?</p>
        </div>
      );
    }
    
    // Fallback response with lead generation intent
    return (
      <div className="space-y-2">
        <p>Thanks for your question! To provide the most personalized guidance for your business needs, our consultants would love to learn more about your specific situation.</p>
        <div className="flex flex-col gap-2 mt-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/booking" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book a free consultation
            </Link>
          </Button>
          <Button variant="outline" size="sm" onClick={() => {
            setMessages(prev => [...prev, { 
              id: prev.length + 1, 
              content: "I'd be happy to have one of our consultants reach out to you. Could you share your email address?", 
              isBot: true 
            }]);
          }}>
            <Mail className="mr-2 h-4 w-4" />
            Request more information
          </Button>
        </div>
      </div>
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Githaf Assistant</DialogTitle>
          <DialogDescription>
            How can we help transform your business with AI?
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col h-[400px]">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-secondary">
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <textarea
                className="flex-1 p-2 border rounded-md resize-none"
                placeholder="Type a message..."
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotDialog;
