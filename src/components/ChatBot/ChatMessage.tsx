
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
            ? 'bg-secondary text-secondary-foreground' 
            : 'bg-primary text-primary-foreground'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
