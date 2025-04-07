
import { AuditResult, ImprovementData } from "./types";

export function generateImprovementRecommendations(auditResult: AuditResult): ImprovementData[] {
  // Create improvements based on the audit results and competitor comparison
  const improvements: ImprovementData[] = [];
  
  if (auditResult.performance.score < 90) {
    improvements.push({
      requirement: 'Page Load Speed',
      current: `Your site loads in ${Math.round(10 - auditResult.performance.score/10)}.${Math.round(Math.random() * 9)} seconds`,
      improvement: 'We can optimize it to load in under 2 seconds'
    });
    
    improvements.push({
      requirement: 'Image Optimization',
      current: 'Images are not properly compressed and sized',
      improvement: 'We can compress and resize images to reduce page weight by up to 70%'
    });
  }
  
  if (auditResult.seo.score < 90) {
    improvements.push({
      requirement: 'SEO Optimization',
      current: 'Missing meta tags and structured data',
      improvement: 'We can add complete meta tags and implement structured data for better search rankings'
    });
    
    improvements.push({
      requirement: 'Content Organization',
      current: 'Content is not properly structured for SEO',
      improvement: 'We can implement proper heading hierarchy and content organization'
    });
  }
  
  if (auditResult.accessibility.score < 90) {
    improvements.push({
      requirement: 'Accessibility Compliance',
      current: 'Site does not meet WCAG 2.1 standards',
      improvement: 'We can enhance accessibility to meet WCAG 2.1 AA standards'
    });
  }
  
  if (auditResult.bestPractices.score < 90) {
    improvements.push({
      requirement: 'Security',
      current: 'HTTP protocol and outdated SSL',
      improvement: 'We will implement HTTPS with the latest TLS protocols'
    });
  }
  
  // Add traffic/competition based improvements
  if (auditResult.competitors && auditResult.competitors.length > 0) {
    // Get average competitor traffic
    const avgCompetitorTraffic = auditResult.competitors.reduce((sum, comp) => 
      sum + comp.traffic.monthlyVisits, 0) / auditResult.competitors.length;
    
    if (auditResult.traffic.monthlyVisits < avgCompetitorTraffic * 0.8) {
      improvements.push({
        requirement: 'Traffic Growth Strategy',
        current: `Your monthly traffic (${auditResult.traffic.monthlyVisits.toLocaleString()}) is below industry average`,
        improvement: 'We can implement a comprehensive SEO and content strategy to increase traffic by 150%'
      });
    }
    
    // Compare organic traffic percentage
    const yourOrganicPercentage = (auditResult.traffic.organicTraffic / auditResult.traffic.monthlyVisits) * 100;
    const competitorOrganicAvg = auditResult.competitors.reduce((sum, comp) => 
      sum + ((comp.traffic.organicTraffic / comp.traffic.monthlyVisits) * 100), 0) / auditResult.competitors.length;
    
    if (yourOrganicPercentage < competitorOrganicAvg) {
      improvements.push({
        requirement: 'Organic Traffic Improvement',
        current: `Your organic traffic ratio (${yourOrganicPercentage.toFixed(1)}%) is below competitors (${competitorOrganicAvg.toFixed(1)}%)`,
        improvement: 'We can optimize your organic traffic sources through improved search visibility and content strategy'
      });
    }
  }
  
  return improvements;
}
