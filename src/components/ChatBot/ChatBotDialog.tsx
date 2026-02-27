
import React, { useState, useRef } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { toast } from 'sonner';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';
import { ChatBotDialogProps, Message } from './types';

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: { role: string; content: string }[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || "Failed to get response");
    return;
  }

  if (!resp.body) {
    onError("No response body");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, newlineIndex);
      buffer = buffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") break;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) onDelta(content);
      } catch {
        buffer = line + "\n" + buffer;
        break;
      }
    }
  }
  onDone();
}

const ChatBotDialog: React.FC<ChatBotDialogProps> = ({ open, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hi there! 👋 I'm the Githaf Assistant — here to help you learn about our services, understand how AI can benefit your business, or get in touch with our team. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const assistantBufferRef = useRef("");

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: messages.length + 1, content: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    assistantBufferRef.current = "";

    // Build conversation history for the API
    const apiMessages = [...messages, userMsg]
      .filter(m => m.content)
      .map(m => ({
        role: m.isBot ? "assistant" : "user",
        content: m.content,
      }));

    try {
      await streamChat({
        messages: apiMessages,
        onDelta: (chunk) => {
          assistantBufferRef.current += chunk;
          const currentText = assistantBufferRef.current;
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (last?.isBot && last.id === userMsg.id + 1) {
              return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: currentText } : m);
            }
            return [...prev, { id: userMsg.id + 1, content: currentText, isBot: true }];
          });
        },
        onDone: () => setIsLoading(false),
        onError: (err) => {
          setIsLoading(false);
          toast.error(err);
          setMessages(prev => [...prev, { id: userMsg.id + 1, content: "Sorry, I'm having trouble connecting right now. Please try again or reach us at info@githafconsulting.com.", isBot: true }]);
        },
      });
    } catch {
      setIsLoading(false);
      toast.error("Connection error");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {open && (
        <div className={`fixed bottom-20 right-6 ${isExpanded ? 'w-[640px]' : 'w-96'} max-w-[calc(100vw-2rem)] bg-background border border-border rounded-lg shadow-xl z-50`}>
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Githaf Assistant</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded((v) => !v)}
                  className="text-foreground/80 hover:text-foreground"
                  aria-label={isExpanded ? 'Collapse chat' : 'Expand chat'}
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button 
                  onClick={() => onOpenChange(false)}
                  className="text-foreground/80 hover:text-foreground"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your friendly guide to Githaf Consulting
            </p>
          </div>
          
          <div className={`flex flex-col ${isExpanded ? 'h-[70vh]' : 'h-[400px]'}`}>
            <ChatMessageList messages={messages} isLoading={isLoading} />
            <MessageInput 
              input={input} 
              setInput={setInput} 
              handleSend={handleSend} 
              handleKeyDown={handleKeyDown} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotDialog;
