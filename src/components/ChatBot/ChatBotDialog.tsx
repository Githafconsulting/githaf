
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { generateResponse } from './utils/messageUtils';
import { ChatBotDialogProps, Message } from './types';
import MessagesContainer from './MessagesContainer';
import ChatInput from './ChatInput';

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
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
    if (open) {
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
    }
  }, [open, messages.length]);

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
      const response = generateResponse(userQuery, setMessages, email, setLeadCapture);
      setMessages(prev => [...prev, { id: userMessageId + 1, content: response, isBot: true }]);
    }, 1000);
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
          <DialogTitle>Githaf AI Assistant</DialogTitle>
          <DialogDescription>
            How can we help transform your business with artificial intelligence?
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col h-[400px]">
          <MessagesContainer messages={messages} isLoading={isLoading} />
          <ChatInput 
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotDialog;
