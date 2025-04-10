
import React from 'react';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const ChatBotDialogHeader: React.FC = () => {
  return (
    <DialogHeader>
      <DialogTitle>Githaf AI Assistant</DialogTitle>
      <DialogDescription>
        How can we help transform your business with artificial intelligence?
      </DialogDescription>
    </DialogHeader>
  );
};

export default ChatBotDialogHeader;
