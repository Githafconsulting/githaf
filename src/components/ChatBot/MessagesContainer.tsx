
import React, { useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import MessageBubble from './MessageBubble';
import { Message } from './types';

interface MessagesContainerProps {
  messages: Message[];
  isLoading: boolean;
}

const MessagesContainer: React.FC<MessagesContainerProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Autoscroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
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
  );
};

export default MessagesContainer;
