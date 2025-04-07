
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { performWebsiteAudit, generateImprovementRecommendations, type AuditResult } from '@/services/audit';

// Import our new components
import AuditForm from '@/components/website-audit/AuditForm';
import LoadingIndicator from '@/components/website-audit/LoadingIndicator';
import ErrorDisplay from '@/components/website-audit/ErrorDisplay';
import AuditResults from '@/components/website-audit/AuditResults';
import ImprovementRecommendations from '@/components/website-audit/ImprovementRecommendations';

const WebsiteAudit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditResult | null>(null);
  const [improvementsData, setImprovementsData] = useState<any[]>([]);
  const [showImprovements, setShowImprovements] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAudit = async (url: string) => {
    // Reset states
    setIsLoading(true);
    setAuditResults(null);
    setImprovementsData([]);
    setError(null);
    setShowImprovements(false);
    
    try {
      console.log(`Starting audit for: ${url}`);
      
      // Perform the actual audit using the real API
      const results = await performWebsiteAudit(url);
      
      console.log("Audit results received:", results);
      
      if (!results) {
        throw new Error("No results returned from audit");
      }
      
      // Store the results and generate improvements
      setAuditResults(results);
      const improvements = generateImprovementRecommendations(results);
      setImprovementsData(improvements);
      
      setIsLoading(false);
      toast({
        title: "Live Audit Complete",
        description: "Your website audit has been completed with real data.",
      });
    } catch (error) {
      console.error("Error in handleAudit:", error);
      setIsLoading(false);
      setError("We couldn't complete the live audit. The API service may be temporarily unavailable.");
      toast({
        title: "Live Audit Failed",
        description: "Unable to retrieve live data. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout
      title="Live Website Audit | Githaf Consulting"
      description="Get a comprehensive real-time audit of your website's performance, SEO, accessibility, and best practices with competitor benchmarking."
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Website Audit & Competitor Analysis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your website URL below to receive a real-time comprehensive analysis of your site's performance, SEO, accessibility, best practices, and how you compare to competitors.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AuditForm onSubmit={handleAudit} isLoading={isLoading} />

          {isLoading && <LoadingIndicator />}

          {error && !isLoading && (
            <ErrorDisplay message={error} onRetry={() => handleAudit(error)} />
          )}

          {auditResults && !showImprovements && (
            <AuditResults 
              auditResults={auditResults} 
              onShowImprovements={() => setShowImprovements(true)} 
            />
          )}

          {showImprovements && (
            <ImprovementRecommendations 
              improvementsData={improvementsData} 
              onBack={() => setShowImprovements(false)} 
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WebsiteAudit;
