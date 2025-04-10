
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Projects from "./pages/Projects";
import WebDevelopment from "./pages/WebDevelopment";
import WebsiteAudit from "./pages/WebsiteAudit";
import CustomQuoteGenerator from "./pages/CustomQuoteGenerator";
import Favicon from "./components/Favicon";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering - checking for blank page issue");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Favicon />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="app-container min-h-screen flex flex-col" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%'}}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/website-audit" element={<WebsiteAudit />} />
              <Route path="/custom-quote-generator" element={<CustomQuoteGenerator />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
