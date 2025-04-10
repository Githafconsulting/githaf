
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a valid DOM element to render to
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  console.log("Found root element, rendering App");
  const root = createRoot(rootElement);
  
  // Ensure the root element has proper styling
  rootElement.style.minHeight = "100vh";
  rootElement.style.display = "flex";
  rootElement.style.flexDirection = "column";
  
  root.render(<App />);
}
