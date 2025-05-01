
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingMessage: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] p-3 rounded-lg bg-secondary">
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default LoadingMessage;
