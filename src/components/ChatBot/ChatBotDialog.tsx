
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Message {
  id: number;
  content: string;
  isBot: boolean;
}

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello! I'm the Githaf Consulting AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessageId = messages.length + 1;
    setMessages(prev => [...prev, { id: userMessageId, content: input, isBot: false }]);
    setInput('');
    
    // Simulate bot response
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const response = generateResponse(input);
      setMessages(prev => [...prev, { id: userMessageId + 1, content: response, isBot: true }]);
    }, 1000);
  };

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Simple pattern matching to provide responses based on website content
    if (lowerQuery.includes('service') || lowerQuery.includes('offer')) {
      return "Githaf Consulting offers AI Integration, Digital Strategy, Technology Implementation, Data Analytics, and Process Optimization services. We help businesses navigate digital transformation with innovative solutions.";
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email')) {
      return "You can contact us at gravitasitconsulting@gmail.com, call us at +44 7530551944 (UK) or +971 562078508 (UAE), or fill out the contact form on our website.";
    } else if (lowerQuery.includes('location') || lowerQuery.includes('office') || lowerQuery.includes('based')) {
      return "We have offices in Kirby Le Soken, UK and Damac Hills 2, UAE.";
    } else if (lowerQuery.includes('client') || lowerQuery.includes('work') || lowerQuery.includes('company')) {
      return "We've successfully delivered projects for leading companies including HSBC, Royal Bank of Scotland, LuupFX, Paypoint, and SABB.";
    } else if (lowerQuery.includes('transform') || lowerQuery.includes('digital') || lowerQuery.includes('ai')) {
      return "We help businesses transform into the digital age with strategic consulting, innovative AI technologies, and data-driven solutions. Our expertise spans AI integration and digital transformation.";
    } else {
      return "Thank you for your message. We specialize in AI and digital transformation consulting. Is there something specific about our services, experience, or how we can help your business that you'd like to know?";
    }
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
