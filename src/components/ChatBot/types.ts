
import React from 'react';

export interface Message {
  id: number;
  content: string | React.ReactNode;
  isBot: boolean;
}

export interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export type EmailSetter = React.Dispatch<React.SetStateAction<string>>;
export type MessagesSetter = React.Dispatch<React.SetStateAction<Message[]>>;
export type BooleanSetter = React.Dispatch<React.SetStateAction<boolean>>;
