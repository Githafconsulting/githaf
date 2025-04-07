
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Search } from 'lucide-react';

interface AuditFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const AuditForm: React.FC<AuditFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
      return;
    }

    // Validate URL format
    let normalizedUrl;
    try {
      normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
      new URL(normalizedUrl);
      onSubmit(url);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL (e.g., example.com)",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <Input
        type="text"
        placeholder="Enter website URL (e.g., example.com)"
        value={url}
        onChange={handleInputChange}
        className="flex-grow"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Analyzing..." : "Live Audit"}
        {!isLoading && <Search className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
};

export default AuditForm;
