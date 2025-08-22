
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import WebDevelopment from "./pages/WebDevelopment";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AIConsulting from "./pages/services/AIConsulting";
import AISaaSProducts from "./pages/services/AISaaSProducts";
import AIAgents from "./pages/services/AIAgents";
import AIForStartups from "./pages/services/AIForStartups";
import AIConsultingLondon from "./pages/services/AIConsultingLondon";
import AIROICalculator from "./pages/tools/AIROICalculator";
import UseCases from "./pages/UseCases";
import Favicon from "./components/Favicon";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Favicon />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/ai-saas-products" element={<AISaaSProducts />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/ai-for-startups" element={<AIForStartups />} />
          <Route path="/services/ai-consulting-london" element={<AIConsultingLondon />} />
          <Route path="/tools/ai-roi-calculator" element={<AIROICalculator />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
