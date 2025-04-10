
import React from 'react';
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
  console.log("Children type:", typeof children);
  console.log("Children present:", !!children);
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        overflow: 'visible'
      }}>
        <header style={{width: '100%', display: 'block'}}>
          <Navbar />
        </header>
        <main style={{
          flexGrow: 1,
          display: 'block',
          width: '100%',
          overflow: 'visible'
        }}>
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
