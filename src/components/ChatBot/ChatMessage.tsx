
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Message } from './types';

const ContactButtons = () => (
  <div className="flex flex-col gap-2 mt-3">
    <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" asChild>
      <a href="#contact">
        <Mail className="mr-2 h-4 w-4" />Get a free consultation
      </a>
    </Button>
    <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" asChild>
      <a href="https://wa.me/971562078508" target="_blank" rel="noopener noreferrer">
        <MessageSquare className="mr-2 h-4 w-4" />WhatsApp us
      </a>
    </Button>
    <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" asChild>
      <a href="mailto:info@githafconsulting.com">
        <Mail className="mr-2 h-4 w-4" />Email us
      </a>
    </Button>
    <Button variant="outline" size="sm" className="text-slate-800 border-slate-300 hover:bg-slate-50 justify-start" asChild>
      <a href="tel:+971562078508">
        <Phone className="mr-2 h-4 w-4" />Call us
      </a>
    </Button>
  </div>
);

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const hasContactMarker = message.isBot && message.content.includes('[SHOW_CONTACT_BUTTONS]');
  const cleanedContent = message.content.replace(/\[SHOW_CONTACT_BUTTONS\]/g, '').trim();

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
          message.isBot
            ? 'bg-slate-100 text-slate-900 border border-slate-200'
            : 'bg-purple-600 text-white'
        }`}
      >
        <div className={message.isBot ? 'chatbot-message prose prose-sm max-w-none' : ''}>
          {message.isBot ? (
            <>
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
                {cleanedContent}
              </ReactMarkdown>
              {hasContactMarker && <ContactButtons />}
            </>
          ) : (
            message.content
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
