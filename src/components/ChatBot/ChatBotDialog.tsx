
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const websiteInfo = {
  services: [
    "Mobile App Development with AI",
    "Website Development with AI",
    "Payments & Fintech Solutions",
    "Business Analysis",
    "Enterprise Agility",
    "AI Agents",
    "Automated Workflow",
    "Facebook Marketing",
    "Google Marketing",
    "Training & Courses",
    "Programme Governance & Management"
  ],
  about: "Githaf Consulting is a team of experienced consultants specializing in technology, business strategy, and digital marketing, helping SMEs and large businesses thrive in the digital world.",
  experience: "Over 18 years of industry experience with a team of certified consultants and specialists",
  companies: ["HSBC", "Royal Bank of Scotland", "LuupFX", "PayPoint", "SAB", "Al Ghurair", "RBS"]
};

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! 👋 I'm Githaf's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const response = generateResponse(input);
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Check for services related questions
    if (
      lowerQuery.includes('service') || 
      lowerQuery.includes('offer') ||
      lowerQuery.includes('provide') ||
      lowerQuery.includes('do you do')
    ) {
      return `We offer a range of services including: ${websiteInfo.services.join(', ')}. What specific service are you interested in?`;
    }
    
    // Check for specific services
    const serviceMatches = websiteInfo.services.filter(service => 
      lowerQuery.includes(service.toLowerCase())
    );
    
    if (serviceMatches.length > 0) {
      const service = serviceMatches[0];
      if (service.includes('Mobile App')) {
        return "Our Mobile App Development services use AI to create custom mobile apps tailored to your business needs, ensuring efficiency, engagement, and seamless user experiences across platforms.";
      } else if (service.includes('Website')) {
        return "We develop high-performance, responsive websites designed to enhance your online presence, engage customers, and drive business growth, all powered with AI.";
      } else if (service.includes('AI Agents')) {
        return "Our AI Agents can automate repetitive tasks, enhance customer experience, and streamline business operations for optimal performance.";
      } else {
        return `Yes, we offer ${service}. Would you like to know more specific details about this service?`;
      }
    }
    
    // Check for about company questions
    if (
      lowerQuery.includes('about') || 
      lowerQuery.includes('company') ||
      lowerQuery.includes('who are you') ||
      lowerQuery.includes('what is githaf')
    ) {
      return websiteInfo.about;
    }
    
    // Check for experience questions
    if (
      lowerQuery.includes('experience') || 
      lowerQuery.includes('how long') ||
      lowerQuery.includes('years')
    ) {
      return websiteInfo.experience;
    }
    
    // Check for clients/companies
    if (
      lowerQuery.includes('client') || 
      lowerQuery.includes('work with') ||
      lowerQuery.includes('companies')
    ) {
      return `We've successfully delivered projects for leading companies including: ${websiteInfo.companies.join(', ')}.`;
    }
    
    // Check for contact
    if (
      lowerQuery.includes('contact') || 
      lowerQuery.includes('email') ||
      lowerQuery.includes('phone') ||
      lowerQuery.includes('reach')
    ) {
      return "You can contact us through the form in the Contact section of our website. We'll get back to you as soon as possible!";
    }
    
    // Default response
    return "I'd be happy to help with that. Could you provide more specific details about what you'd like to know about our services, company, or how we can help your business?";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center">
            <Bot className="mr-2 h-5 w-5 text-primary" />
            <DialogTitle>Githaf AI Assistant</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={cn(
                  "flex w-full",
                  message.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "rounded-lg px-4 py-2 max-w-[85%]", 
                    message.sender === 'user' 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg px-4 py-2 bg-muted">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotDialog;
