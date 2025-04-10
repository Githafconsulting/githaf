
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a valid DOM element to render to
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  console.log("Found root element, rendering App");
  
  // Ensure the root element has proper styling
  rootElement.style.minHeight = "100vh";
  rootElement.style.display = "flex";
  rootElement.style.flexDirection = "column";
  rootElement.style.width = "100%";
  
  // Reset any potential conflicting styles on body
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.width = "100%";
  document.body.style.minHeight = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  
  const root = createRoot(rootElement);
  root.render(<App />);
}
