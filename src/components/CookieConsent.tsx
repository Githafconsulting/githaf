
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { toast } from 'sonner';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    // Save user's choice
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    
    // Set analytics cookies
    enableAnalyticsCookies();
    
    toast.success("Cookies accepted", {
      description: "Thank you for allowing us to enhance your browsing experience.",
      duration: 3000
    });
  };
  
  const handleReject = () => {
    // Save user's choice
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    
    // No cookies will be set
    toast.info("Cookies rejected", {
      description: "We respect your choice. Only necessary cookies will be used.",
      duration: 3000
    });
  };
  
  // Function to enable analytics cookies
  const enableAnalyticsCookies = () => {
    // This is where you would initialize analytics services
    // For example, Google Analytics, Facebook Pixel, etc.
    console.log('Analytics cookies enabled');
    
    // For demonstration purposes - in a real app you'd initialize your tracking code here
    window.cookiesEnabled = true;
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
              onClick={handleReject}
              variant="outline"
              className="whitespace-nowrap"
              size="sm"
            >
              Reject
            </Button>
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
