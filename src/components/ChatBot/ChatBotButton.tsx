
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatBotDialog from './ChatBotDialog';

const ChatBotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50 p-0"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      
      <ChatBotDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default ChatBotButton;
