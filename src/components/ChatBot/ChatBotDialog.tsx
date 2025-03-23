
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
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
    { id: 1, content: "Hi there! I'm your virtual assistant from Githaf Consulting. How can I help you today?", isBot: true }
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
    
    // More conversational responses
    if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('help')) {
      return "We specialize in AI integration, digital strategy, and technology implementation. Would you like me to tell you more about a specific service? We can help with AI agents, website development, mobile apps, or fintech solutions.";
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email')) {
      return "You can reach our team at gravitasitconsulting@gmail.com or call +971 562078508 (UAE). Is there something specific you'd like assistance with today?";
    } else if (lowerQuery.includes('location') || lowerQuery.includes('office') || lowerQuery.includes('based')) {
      return "We have offices in Kirby Le Soken, UK and Damac Hills 2, UAE. Are you interested in meeting in person or would you prefer a virtual consultation?";
    } else if (lowerQuery.includes('client') || lowerQuery.includes('work') || lowerQuery.includes('company')) {
      return "We've worked with some amazing companies like HSBC, Royal Bank of Scotland, and PayPoint. What industry is your company in? Perhaps I can share some relevant success stories.";
    } else if (lowerQuery.includes('transform') || lowerQuery.includes('digital') || lowerQuery.includes('ai')) {
      return "Digital transformation is all about using technology to fundamentally change how you operate and deliver value. Our team can help guide this journey - from strategy development to implementation. What aspects of digital transformation are you most interested in?";
    } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello there! It's great to meet you. I'm here to answer any questions about how we can help transform your business through AI and digital solutions. What brings you to our site today?";
    } else if (lowerQuery.includes('thank') || lowerQuery.includes('thanks')) {
      return "You're very welcome! Is there anything else I can help you with today?";
    } else if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('expensive')) {
      return "Our pricing varies based on project scope and requirements. We'd be happy to provide a personalized quote after understanding your specific needs. Would you like to schedule a consultation to discuss this further?";
    } else if (lowerQuery.includes('time') || lowerQuery.includes('long') || lowerQuery.includes('schedule')) {
      return "Project timelines depend on complexity and requirements. We pride ourselves on efficient delivery while ensuring quality. Could you tell me a bit more about what you're looking to achieve so I can give you a better estimate?";
    } else {
      return "That's an interesting point! I'd love to learn more about your specific needs so we can determine how best to assist you. Could you share a bit more about your business challenges or what you're hoping to achieve?";
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
          <DialogDescription>
            Ask me anything about our services or how we can help your business
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
