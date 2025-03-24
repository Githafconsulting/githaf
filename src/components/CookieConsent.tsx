
import React, { useState, useEffect } from 'react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent') === 'accepted';
    
    if (!hasAccepted) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg animate-slide-up">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p>
              We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleAccept}
              className="whitespace-nowrap"
              size="sm"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
