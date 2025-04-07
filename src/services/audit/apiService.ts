
import { toast } from "@/hooks/use-toast";
import { AuditResult } from "./types";
import { transformBackupAPIResponse, mockCompetitorData } from "./transforms";

// Primary API endpoint
export async function fetchFromPrimaryAPI(url: string): Promise<AuditResult> {
  console.log("Trying primary API endpoint...");
  
  // Use a combination of available APIs for comprehensive results
  const response = await fetch(`https://api.githafconsulting.com/audit/v2?url=${encodeURIComponent(url)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'gthf-audit-prod-2025',
    },
    signal: AbortSignal.timeout(12000),
  });
  
  if (!response.ok) {
    throw new Error(`Primary API error: ${response.status}`);
  }
  
  return await response.json();
}

// Backup API endpoint with different parameters
export async function fetchFromBackupAPI(url: string): Promise<AuditResult> {
  console.log("Trying backup API endpoint...");
  
  // Attempt to get data from an alternative service
  const response = await fetch(`https://api-alt.githafconsulting.com/site-analysis?target=${encodeURIComponent(url)}&extended=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'gthf-audit-prod-2025',
    },
    signal: AbortSignal.timeout(10000),
  });
  
  if (!response.ok) {
    throw new Error(`Backup API error: ${response.status}`);
  }
  
  // Transform the response to match our expected format
  const data = await response.json();
  return transformBackupAPIResponse(data);
}

// Find and analyze competitors based on domain analysis
export async function findAndAnalyzeCompetitors(url: string): Promise<any[]> {
  console.log(`Finding competitors for ${url}`);
  
  try {
    // Try to get competitor data from another API
    const response = await fetch(`https://api.githafconsulting.com/competitors?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'gthf-audit-prod-2025',
      },
      signal: AbortSignal.timeout(8000),
    });
    
    if (!response.ok) {
      throw new Error('Failed to find competitors');
    }
    
    const competitorUrls = await response.json();
    
    // Analyze each competitor (limited to top 2)
    const competitorPromises = competitorUrls.slice(0, 2).map(async (competitorUrl: string) => {
      return analyzeCompetitor(competitorUrl);
    });
    
    return await Promise.all(competitorPromises);
  } catch (error) {
    console.warn('Error finding competitors:', error);
    // Return mock competitors if real data fails
    return [
      mockCompetitorData(url, 1),
      mockCompetitorData(url, 2)
    ];
  }
}

// Analyze a single competitor
export async function analyzeCompetitor(competitorUrl: string): Promise<any> {
  try {
    console.log(`Analyzing competitor: ${competitorUrl}`);
    
    const response = await fetch(`https://api.githafconsulting.com/audit/basic?url=${encodeURIComponent(competitorUrl)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'gthf-audit-prod-2025',
      },
      signal: AbortSignal.timeout(8000),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to analyze competitor: ${competitorUrl}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`Error analyzing competitor ${competitorUrl}:`, error);
    // Return mock competitor data
    return mockCompetitorData(competitorUrl, Math.floor(Math.random() * 100));
  }
}
