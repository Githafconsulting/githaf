
import { AuditResult } from "../types";
import { mockCompetitorData } from "./competitorTransforms";

// Generate mock audit result with some variance
export function generateMockAuditResult(url: string): AuditResult {
  console.log(`Generating mock audit for ${url}`);
  
  // Create some variability based on the URL
  const urlHash = Array.from(url).reduce((hash, char) => hash + char.charCodeAt(0), 0) % 30;
  
  const basePerformance = 65 + urlHash % 25;
  const baseSEO = 70 + urlHash % 20;
  const baseAccessibility = 60 + urlHash % 30;
  const baseBestPractices = 70 + urlHash % 20;
  
  const monthlyVisits = 5000 + (urlHash * 500);
  const organicTraffic = Math.floor(monthlyVisits * (0.4 + (urlHash % 30) / 100));
  
  const mockResult: AuditResult = {
    performance: {
      score: basePerformance,
      issues: [
        {
          description: 'Large JavaScript bundles are slowing down page load',
          severity: 'critical'
        },
        {
          description: 'Images are not properly sized for their containers',
          severity: 'warning'
        },
        {
          description: 'Good server response time',
          severity: 'info'
        }
      ]
    },
    seo: {
      score: baseSEO,
      issues: [
        {
          description: 'Missing meta descriptions on key pages',
          severity: 'warning'
        },
        {
          description: 'Improper heading structure',
          severity: 'warning'
        },
        {
          description: 'Good URL structure',
          severity: 'info'
        }
      ]
    },
    accessibility: {
      score: baseAccessibility,
      issues: [
        {
          description: 'Low color contrast in key UI elements',
          severity: 'critical'
        },
        {
          description: 'Missing alt text on important images',
          severity: 'warning'
        },
        {
          description: 'Navigation needs keyboard accessibility improvements',
          severity: 'warning'
        }
      ]
    },
    bestPractices: {
      score: baseBestPractices,
      issues: [
        {
          description: 'HTTPS implementation needs improvement',
          severity: 'warning'
        },
        {
          description: 'Outdated libraries detected',
          severity: 'warning'
        },
        {
          description: 'Cache policy needs improvement',
          severity: 'warning'
        }
      ]
    },
    traffic: {
      monthlyVisits: monthlyVisits,
      bounceRate: `${45 + (urlHash % 20)}%`,
      avgSessionDuration: `${1 + (urlHash % 3)}m ${10 + (urlHash % 40)}s`,
      organicTraffic: organicTraffic
    },
    competitors: [
      mockCompetitorData(url, 1),
      mockCompetitorData(url, 2)
    ]
  };
  
  return mockResult;
}
