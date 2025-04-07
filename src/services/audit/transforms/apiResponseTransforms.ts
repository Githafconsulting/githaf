
import { AuditResult } from "../types";
import { transformIssues } from "./issueTransforms";
import { transformCompetitors } from "./competitorTransforms";

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
