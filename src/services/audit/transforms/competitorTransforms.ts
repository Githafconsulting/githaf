
import { AuditResult } from "../types";

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
