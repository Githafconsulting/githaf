
import { AuditResult } from "./types";

// Transform backup API response to match our format
export function transformBackupAPIResponse(data: any): AuditResult {
  // This function would adapt different API formats to our standard format
  // For now, we'll assume a similar structure with different property names
  
  return {
    performance: {
      score: data.metrics?.performance || data.performanceScore || 75,
      issues: transformIssues(data.performanceIssues || data.issues?.performance || []),
    },
    seo: {
      score: data.metrics?.seo || data.seoScore || 80,
      issues: transformIssues(data.seoIssues || data.issues?.seo || []),
    },
    accessibility: {
      score: data.metrics?.accessibility || data.a11yScore || 70,
      issues: transformIssues(data.accessibilityIssues || data.issues?.accessibility || []),
    },
    bestPractices: {
      score: data.metrics?.bestPractices || data.bestPracticesScore || 75,
      issues: transformIssues(data.bestPracticesIssues || data.issues?.bestPractices || []),
    },
    traffic: {
      monthlyVisits: data.traffic?.monthly || data.analytics?.visits || 5000,
      bounceRate: data.traffic?.bounceRate || data.analytics?.bounce || "45%",
      avgSessionDuration: data.traffic?.sessionDuration || data.analytics?.duration || "2m 30s",
      organicTraffic: data.traffic?.organic || data.analytics?.organicVisits || 2500,
    },
    competitors: transformCompetitors(data.competitors || []),
  };
}

// Helper function to transform issues
export function transformIssues(issues: any[]): Array<{description: string; severity: 'critical' | 'warning' | 'info'}> {
  if (!Array.isArray(issues) || issues.length === 0) {
    return [
      { description: "No specific issues detected", severity: "info" }
    ];
  }
  
  return issues.map(issue => ({
    description: issue.description || issue.message || issue.text || "Issue detected",
    severity: mapSeverity(issue.severity || issue.impact || "medium")
  })).slice(0, 5); // Limit to 5 issues max
}

// Map various severity levels to our standard format
export function mapSeverity(severity: string): 'critical' | 'warning' | 'info' {
  const normalized = severity.toLowerCase();
  if (normalized.includes('critical') || normalized.includes('high') || normalized.includes('severe')) {
    return 'critical';
  } else if (normalized.includes('warning') || normalized.includes('medium') || normalized.includes('moderate')) {
    return 'warning';
  }
  return 'info';
}

// Transform competitor data
export function transformCompetitors(competitors: any[]): Array<any> {
  if (!Array.isArray(competitors) || competitors.length === 0) {
    return [];
  }
  
  return competitors.map(comp => ({
    url: comp.url || comp.domain || "competitor.com",
    performance: comp.performance || comp.performanceScore || 75,
    seo: comp.seo || comp.seoScore || 78,
    accessibility: comp.accessibility || comp.a11yScore || 72,
    bestPractices: comp.bestPractices || comp.bpScore || 76,
    traffic: {
      monthlyVisits: comp.traffic?.monthly || comp.visits || 6000,
      organicTraffic: comp.traffic?.organic || comp.organicVisits || 3000,
    }
  })).slice(0, 3); // Limit to 3 competitors
}

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

// Generate mock competitor data with some variation
export function mockCompetitorData(url: string, index: number): any {
  const urlHash = Array.from(url).reduce((hash, char) => hash + char.charCodeAt(0), 0);
  const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
  
  // Extract domain name and create mock competitor domains
  const parts = domain.split('.');
  let baseDomain = parts.length > 2 ? parts.slice(-2).join('.') : domain;
  
  // Create competitor URLs based on the domain pattern
  let competitorDomain;
  if (index === 1) {
    competitorDomain = domain.includes('www') ? 
      domain.replace('www', 'best' + baseDomain.split('.')[0]) : 
      'best' + baseDomain;
  } else {
    competitorDomain = domain.includes('www') ? 
      domain.replace('www', 'top' + baseDomain.split('.')[0]) : 
      'top' + baseDomain;
  }
  
  // Create realistic variance for competitor scores
  const performanceVariance = ((urlHash + index) % 30) - 15;
  const seoVariance = ((urlHash + index * 2) % 20) - 10;
  const accessibilityVariance = ((urlHash + index * 3) % 25) - 12;
  const bestPracticesVariance = ((urlHash + index * 4) % 15) - 7;
  
  // Base values from the original site with variance
  const basePerformance = 65 + (urlHash % 25);
  const baseSEO = 70 + (urlHash % 20);
  const baseAccessibility = 60 + (urlHash % 30);
  const baseBestPractices = 70 + (urlHash % 20);
  
  // Competitor traffic with realistic variance
  const baseMonthlyVisits = 5000 + (urlHash * 500);
  const trafficMultiplier = 0.7 + (((urlHash * index) % 60) / 100) * 2; // 70% to 130% of your traffic
  
  return {
    url: competitorDomain,
    performance: Math.max(10, Math.min(100, basePerformance + performanceVariance)),
    seo: Math.max(10, Math.min(100, baseSEO + seoVariance)),
    accessibility: Math.max(10, Math.min(100, baseAccessibility + accessibilityVariance)),
    bestPractices: Math.max(10, Math.min(100, baseBestPractices + bestPracticesVariance)),
    traffic: {
      monthlyVisits: Math.round(baseMonthlyVisits * trafficMultiplier),
      organicTraffic: Math.round(baseMonthlyVisits * trafficMultiplier * (0.3 + (urlHash % 40) / 100))
    }
  };
}
