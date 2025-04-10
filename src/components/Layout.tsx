
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';
import CookieConsent from './CookieConsent';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Githaf Consulting - AI and Digital Transformation", 
  description = "Expert consulting services for AI implementation and digital transformation strategies."
}) => {
  console.log("Layout rendering with children:", !!children);
  console.log("Children content:", children);
  
  // Function to handle reveal animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 50; // Reduced to start animations earlier
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    // Initial check on mount
    setTimeout(handleScroll, 100); // Short delay to ensure elements are positioned
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle lazy loading of images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach((img) => {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      lazyImages.forEach((img) => {
        img.classList.add('loaded');
      });
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex flex-col min-h-screen" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow" role="main" style={{flexGrow: 1, display: 'block'}}>
          {children}
        </main>
        <Footer />
        <ChatBot />
        <CookieConsent />
      </div>
    </>
  );
};

export default Layout;
