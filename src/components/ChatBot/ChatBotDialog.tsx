
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Maximize2, Minimize2 } from 'lucide-react';
import { toast } from 'sonner';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';
import { ChatBotDialogProps, Message } from './types';
import { generateResponse } from './responseGenerator';

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there! 👋 I'm Githaf Chat, your AI assistant. Would you like to explore how AI can transform your business operations, enhance customer experiences, or optimize your processes?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadCapture, setLeadCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [previousQueries, setPreviousQueries] = useState<Set<string>>(new Set());
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <>
      {open && (
        <div className={`fixed bottom-20 right-6 ${isExpanded ? 'w-[640px]' : 'w-96'} max-w-[calc(100vw-2rem)] bg-background border border-border rounded-lg shadow-xl z-50`}>
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Githaf Chat</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded((v) => !v)}
                  className="text-foreground/80 hover:text-foreground"
                  aria-label={isExpanded ? 'Collapse chat' : 'Expand chat'}
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button 
                  onClick={() => onOpenChange(false)}
                  className="text-foreground/80 hover:text-foreground"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>
            </div>
            <p className="text-sm text-foreground mt-1">
              How can we help transform your business with AI?
            </p>
          </div>
          
          <div className={`flex flex-col ${isExpanded ? 'h-[70vh]' : 'h-[400px]'}`}>
            <ChatMessageList messages={messages} isLoading={isLoading} />
            <MessageInput 
              input={input} 
              setInput={setInput} 
              handleSend={handleSend} 
              handleKeyDown={handleKeyDown} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotDialog;
