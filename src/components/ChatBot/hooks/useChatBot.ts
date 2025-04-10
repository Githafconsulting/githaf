
import { useState, useEffect } from 'react';
import { generateResponse } from '../utils/messageUtils';
import { Message } from '../types';
import { toast } from 'sonner';

export const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there! 👋 I'm your Githaf AI assistant. Would you like to explore how AI can transform your business operations, enhance customer experiences, or optimize your processes?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadCapture, setLeadCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [previousQueries, setPreviousQueries] = useState<Set<string>>(new Set());

  // Auto-open the chat if this is triggered by the timer
  useEffect(() => {
    // If user hasn't interacted yet, show a proactive message after a short delay
    const timer = setTimeout(() => {
      if (messages.length === 1) {
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          content: "I noticed you're exploring our site. Can I help you find information about our AI solutions or answer any questions about digital transformation?", 
          isBot: true 
        }]);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [messages.length]);

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
      const response = generateResponse(userQuery, setMessages, email, setEmail, setLeadCapture);
      setMessages(prev => [...prev, { id: userMessageId + 1, content: response, isBot: true }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    leadCapture,
    email,
    handleSend,
    handleKeyDown
  };
};
