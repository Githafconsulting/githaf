
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
  console.log("Layout rendering with title:", title);
  
  useEffect(() => {
    console.log("Layout mounted, children:", children ? "present" : "missing");
    return () => console.log("Layout unmounted");
  }, [children]);
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex flex-col min-h-screen w-full bg-white" style={{backgroundColor: 'white'}}>
        <Navbar />
        <main className="flex-grow w-full" style={{minHeight: '70vh'}}>
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
