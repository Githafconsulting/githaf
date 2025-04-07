
export interface AuditResult {
  performance: {
    score: number;
    issues: Array<{
      description: string;
      severity: 'critical' | 'warning' | 'info';
    }>;
  };
  seo: {
    score: number;
    issues: Array<{
      description: string;
      severity: 'critical' | 'warning' | 'info';
    }>;
  };
  accessibility: {
    score: number;
    issues: Array<{
      description: string;
      severity: 'critical' | 'warning' | 'info';
    }>;
  };
  bestPractices: {
    score: number;
    issues: Array<{
      description: string;
      severity: 'critical' | 'warning' | 'info';
    }>;
  };
  traffic: {
    monthlyVisits: number;
    bounceRate: string;
    avgSessionDuration: string;
    organicTraffic: number;
  };
  competitors?: Array<{
    url: string;
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
    traffic: {
      monthlyVisits: number;
      organicTraffic: number;
    };
  }>;
}

export interface ImprovementData {
  requirement: string;
  current: string;
  improvement: string;
}
