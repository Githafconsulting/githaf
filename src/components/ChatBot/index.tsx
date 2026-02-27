
import React, { useState, useEffect } from 'react';
import ChatBotButton from './ChatBotButton';
import ChatBotDialog from './ChatBotDialog';
import WhatsAppButton from './WhatsAppButton';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 30000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <WhatsAppButton />
      {showButton && <ChatBotButton onClick={() => setIsOpen(true)} />}
      <ChatBotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default ChatBot;
