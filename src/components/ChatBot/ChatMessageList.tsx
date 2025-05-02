
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import LoadingMessage from './LoadingMessage';
import { Message } from './types';

interface ChatMessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      
      {isLoading && <LoadingMessage />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessageList;
