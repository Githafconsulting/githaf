
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("CRITICAL ERROR: Failed to find the root element");
} else {
  console.log("Root element found, rendering App");
  
  // Create and render the root
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("App has been rendered to DOM");
}
