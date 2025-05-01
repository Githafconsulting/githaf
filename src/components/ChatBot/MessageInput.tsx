
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  input, 
  setInput, 
  handleSend, 
  handleKeyDown 
}) => {
  return (
    <div className="border-t p-4">
      <div className="flex gap-2">
        <textarea
          className="flex-1 p-2 border rounded-md resize-none"
          placeholder="Ask about our AI solutions..."
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSend} size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
