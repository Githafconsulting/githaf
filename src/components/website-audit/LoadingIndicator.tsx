
import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p className="mt-4 text-lg">Performing live analysis of your website...</p>
      <p className="text-muted-foreground">This comprehensive real-time analysis may take up to 30 seconds</p>
    </div>
  );
};

export default LoadingIndicator;
