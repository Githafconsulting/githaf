
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AuditResult } from '@/services/audit/types';
import PerformanceMetrics from './PerformanceMetrics';
import TrafficAnalysis from './TrafficAnalysis';
import CompetitorBenchmark from './CompetitorBenchmark';

interface AuditResultsProps {
  auditResults: AuditResult;
  onShowImprovements: () => void;
}

const AuditResults: React.FC<AuditResultsProps> = ({ 
  auditResults, 
  onShowImprovements 
}) => {
  return (
    <div className="mt-8 reveal fade-in space-y-10">
      <h2 className="text-2xl font-bold mb-6">Audit Results</h2>
      
      {/* Main metrics grid */}
      <PerformanceMetrics auditResults={auditResults} />
      
      {/* Traffic metrics section */}
      <div className="mt-10">
        <TrafficAnalysis traffic={auditResults.traffic} />
      </div>
      
      {/* Competitor Analysis */}
      {auditResults.competitors && auditResults.competitors.length > 0 && (
        <CompetitorBenchmark auditResults={auditResults} />
      )}
      
      <div className="text-center mt-12">
        <Button onClick={onShowImprovements} size="lg" className="px-8">
          Improve My Site <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AuditResults;
