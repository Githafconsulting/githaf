
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
        className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
          message.isBot 
            ? 'bg-slate-100 text-slate-900 border border-slate-200' 
            : 'bg-purple-600 text-white'
        }`}
      >
        <div className={message.isBot ? 'chatbot-message' : ''}>
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
