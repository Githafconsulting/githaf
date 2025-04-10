
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessagesSetter } from '../../types';

// Fallback response handler
export const handleFallbackQuery = (query: string, setMessages: MessagesSetter) => {
  return (
    <div className="space-y-2">
      <p>That's an interesting question about {query.length > 30 ? query.substring(0, 30) + "..." : query}. To provide you with the most accurate and helpful information tailored to your business needs, our AI specialists would love to learn more about your specific situation and objectives.</p>
      <p>We specialize in crafting custom AI solutions that address your unique challenges and opportunities. Would you like to:</p>
      <div className="flex flex-col gap-2 mt-2">
        <Button variant="outline" size="sm" asChild>
          <Link to="/booking" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a free AI consultation
          </Link>
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          setMessages(prev => [...prev, { 
            id: prev.length + 1, 
            content: "I'd be happy to have one of our AI specialists reach out to you with more information. Could you share your email address?", 
            isBot: true 
          }]);
        }}>
          <Mail className="mr-2 h-4 w-4" />
          Request more information
        </Button>
        <Button variant="outline" size="sm" onClick={() => {
          setMessages(prev => [...prev, { 
            id: prev.length + 1, 
            content: "Is there something specific about our AI solutions you'd like to know more about?", 
            isBot: true 
          }]);
        }}>
          <Bot className="mr-2 h-4 w-4" />
          Ask another question
        </Button>
      </div>
    </div>
  );
};
