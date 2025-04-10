
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("NotFound page mounted for path:", location.pathname);
    // Reset any conflicting styles
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.width = "100%";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.overflow = "visible";
  }, [location.pathname]);

  return (
    <Layout title="Page Not Found | Githaf Consulting">
      <div className="min-h-[70vh] flex items-center justify-center" style={{display: 'flex', width: '100%'}}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
