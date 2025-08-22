
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatBotButtonProps {
  onClick: () => void;
}

const ChatBotButton: React.FC<ChatBotButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50 p-0 bg-pink-600 hover:bg-pink-700 text-white"
      aria-label="Open chat"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};

export default ChatBotButton;
