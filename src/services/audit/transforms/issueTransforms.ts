
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
