
import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import { AuditResult } from '@/services/audit/types';

interface PerformanceMetricsProps {
  auditResults: AuditResult;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ auditResults }) => {
  // Helper function to render score color classes based on the score value
  const getScoreColorClass = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Performance</h3>
        <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.performance.score)}`}>
          {auditResults.performance.score}/100
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {auditResults.performance.issues.map((issue, index) => (
            <li key={index} className="flex items-center gap-2">
              {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
              {issue.description}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">SEO</h3>
        <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.seo.score)}`}>
          {auditResults.seo.score}/100
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {auditResults.seo.issues.map((issue, index) => (
            <li key={index} className="flex items-center gap-2">
              {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
              {issue.description}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
        <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.accessibility.score)}`}>
          {auditResults.accessibility.score}/100
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {auditResults.accessibility.issues.map((issue, index) => (
            <li key={index} className="flex items-center gap-2">
              {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
              {issue.description}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
        <div className={`text-3xl font-bold ${getScoreColorClass(auditResults.bestPractices.score)}`}>
          {auditResults.bestPractices.score}/100
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {auditResults.bestPractices.issues.map((issue, index) => (
            <li key={index} className="flex items-center gap-2">
              {issue.severity === 'critical' && <AlertTriangle className="h-4 w-4 text-red-500" />}
              {issue.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
              {issue.severity === 'info' && <CheckCircle className="h-4 w-4 text-green-500" />}
              {issue.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
