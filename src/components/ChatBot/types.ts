
export interface Message {
  id: number;
  content: string | React.ReactNode;
  isBot: boolean;
}

export interface ChatBotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
