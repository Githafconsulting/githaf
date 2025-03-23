
import React, { useState } from 'react';
import ChatBotButton from './ChatBotButton';
import ChatBotDialog from './ChatBotDialog';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <ChatBotButton onClick={() => setIsOpen(true)} />
      <ChatBotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default ChatBot;
