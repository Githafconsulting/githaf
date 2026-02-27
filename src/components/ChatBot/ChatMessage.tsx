
import React from 'react';
import ReactMarkdown from 'react-markdown';
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
        <div className={message.isBot ? 'chatbot-message prose prose-sm max-w-none' : ''}>
          {message.isBot ? (
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline font-medium">
                    {children}
                  </a>
                ),
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 space-y-1 mb-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 space-y-1 mb-2">{children}</ol>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            message.content
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
