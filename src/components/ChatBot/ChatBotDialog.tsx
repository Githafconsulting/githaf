
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChatBotDialogProps } from './types';
import MessagesContainer from './MessagesContainer';
import ChatInput from './ChatInput';
import ChatBotDialogHeader from './ChatBotDialogHeader';
import { useChatBot } from './hooks/useChatBot';

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  console.log("ChatBotDialog rendering, open:", open);

  const {
    messages,
    input,
    setInput,
    isLoading,
    handleSend,
    handleKeyDown
  } = useChatBot();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <ChatBotDialogHeader />
        
        <div className="flex flex-col h-[400px]">
          <MessagesContainer messages={messages} isLoading={isLoading} />
          <ChatInput 
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            handleKeyDown={handleKeyDown}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotDialog;
