
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface EmailCaptureProps {
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (email: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ email, setEmail, onSubmit }) => {
  return (
    <div className="mt-2 space-y-2">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full p-2 border rounded text-sm"
      />
      <Button 
        size="sm" 
        className="w-full" 
        onClick={() => {
          if (email && email.includes('@')) {
            onSubmit(email);
          } else {
            toast.error("Please enter a valid email address");
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default EmailCapture;
