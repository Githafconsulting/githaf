
import { ReactNode } from 'react';

export interface Message {
  id: number;
  content: string;
  isBot: boolean;
}

export interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
