
import React from 'react';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div 
        className={`max-w-[80%] p-3 rounded-lg ${
          message.isBot 
            ? 'bg-purple-100 text-purple-900 border border-purple-200' 
            : 'bg-primary text-primary-foreground'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
