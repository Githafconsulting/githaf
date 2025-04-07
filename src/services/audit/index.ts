
import { toast } from "@/hooks/use-toast";
import { AuditResult, ImprovementData } from "./types";
import { 
  fetchFromPrimaryAPI, 
  fetchFromBackupAPI,
  findAndAnalyzeCompetitors
} from "./apiService";
import { generateMockAuditResult } from "./transformUtils";
import { generateImprovementRecommendations } from "./improvementService";

// Main function to perform website audit with real API
export async function performWebsiteAudit(url: string): Promise<AuditResult> {
  // Normalize the URL
  const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
  
  try {
    console.log(`Starting audit for ${normalizedUrl}`);
    toast({
      title: "Audit Started",
      description: "Analyzing your website...",
    });
    
    // Try multiple API endpoints to get reliable results
    const results = await Promise.race([
      fetchFromPrimaryAPI(normalizedUrl),
      fetchFromBackupAPI(normalizedUrl),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("API timeout")), 15000))
    ]);
    
    console.log("Audit API response:", results);
    
    // Ensure the response has all required fields
    if (!results || !results.performance || !results.seo || !results.accessibility || !results.bestPractices) {
      console.error("Invalid API response format:", results);
      throw new Error("Invalid API response format");
    }
    
    // Try to get competitor data if not already included
    if (!results.competitors || results.competitors.length === 0) {
      try {
        results.competitors = await findAndAnalyzeCompetitors(normalizedUrl);
      } catch (error) {
        console.warn("Could not fetch competitor data:", error);
        // Continue without competitor data
      }
    }
    
    toast({
      title: "Audit Complete",
      description: "Successfully analyzed your website!",
    });
    
    return results;
  } catch (error) {
    console.error('Error during website audit:', error);
    toast({
      title: "Audit Failed",
      description: "We couldn't complete the audit. Generating simulated results instead.",
      variant: "destructive",
    });
    
    // Fall back to simulated data
    const mockResults = generateMockAuditResult(normalizedUrl);
    console.log("Generated mock results:", mockResults);
    return mockResults;
  }
}

// Export all necessary functions and types
export { 
  generateImprovementRecommendations,
  type AuditResult,
  type ImprovementData
};
