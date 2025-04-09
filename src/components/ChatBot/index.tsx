
import React, { useState, useEffect } from 'react';
import ChatBotButton from './ChatBotButton';
import ChatBotDialog from './ChatBotDialog';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Show chat button after 30 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
      // Optionally show a greeting toast here
    }, 30000); // 30 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {showButton && <ChatBotButton onClick={() => setIsOpen(true)} />}
      <ChatBotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default ChatBot;
