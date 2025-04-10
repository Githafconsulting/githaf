
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a valid DOM element to render to
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  console.log("Found root element, rendering App");
  
  // Clear any existing styles that might be causing conflicts
  rootElement.style.cssText = '';
  rootElement.style.minHeight = "100vh";
  rootElement.style.display = "flex";
  rootElement.style.flexDirection = "column";
  rootElement.style.width = "100%";
  rootElement.style.overflow = "visible";
  
  // Reset any potential conflicting styles on body
  document.body.style.cssText = '';
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.width = "100%";
  document.body.style.minHeight = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.overflow = "visible";
  
  const root = createRoot(rootElement);
  root.render(<App />);
}
