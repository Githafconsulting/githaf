
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { toast } from 'sonner';
import { Cookie, X } from 'lucide-react';

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
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  // Function to enable analytics cookies
  const enableAnalyticsCookies = () => {
    // This is where you would initialize analytics services
    // For example, Google Analytics, Facebook Pixel, etc.
    console.log('Analytics cookies enabled');
    
    // For demonstration purposes - in a real app you'd initialize your tracking code here
    // Using a safe way to add the property to window
    if (typeof window !== 'undefined') {
      (window as any).cookiesEnabled = true;
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-1">
            <div className="bg-slate-900/80 rounded-xl">
              <div className="flex items-start gap-4 p-6">
                {/* Cookie Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAccept}
                      className="flex-1 sm:flex-none"
                      size="sm"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleReject}
                      variant="outline"
                      className="flex-1 sm:flex-none border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
                      size="sm"
                    >
                      Reject All
                    </Button>
                    <button
                      onClick={handleClose}
                      className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800 rounded-lg"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
