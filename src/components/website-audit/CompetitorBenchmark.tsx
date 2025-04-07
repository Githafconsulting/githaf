
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { AuditResult } from '@/services/audit/types';

interface CompetitorBenchmarkProps {
  auditResults: AuditResult;
}

const CompetitorBenchmark: React.FC<CompetitorBenchmarkProps> = ({ auditResults }) => {
  // Helper function to render score color classes based on the score value
  const getScoreColorClass = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  // Format traffic numbers with comma separators
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  if (!auditResults.competitors || auditResults.competitors.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Competitor Benchmark</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Website</TableHead>
              <TableHead className="text-right">Performance</TableHead>
              <TableHead className="text-right">SEO</TableHead>
              <TableHead className="text-right">Accessibility</TableHead>
              <TableHead className="text-right">Best Practices</TableHead>
              <TableHead className="text-right">Monthly Traffic</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Your website */}
            <TableRow className="font-medium bg-muted/50">
              <TableCell>Your Website</TableCell>
              <TableCell className={`text-right ${getScoreColorClass(auditResults.performance.score)}`}>
                {auditResults.performance.score}
              </TableCell>
              <TableCell className={`text-right ${getScoreColorClass(auditResults.seo.score)}`}>
                {auditResults.seo.score}
              </TableCell>
              <TableCell className={`text-right ${getScoreColorClass(auditResults.accessibility.score)}`}>
                {auditResults.accessibility.score}
              </TableCell>
              <TableCell className={`text-right ${getScoreColorClass(auditResults.bestPractices.score)}`}>
                {auditResults.bestPractices.score}
              </TableCell>
              <TableCell className="text-right">
                {formatNumber(auditResults.traffic.monthlyVisits)}
              </TableCell>
            </TableRow>
            
            {/* Competitors */}
            {auditResults.competitors.map((competitor, index) => (
              <TableRow key={index}>
                <TableCell>
                  <span className="font-medium">{competitor.url}</span>
                </TableCell>
                <TableCell className={`text-right ${getScoreColorClass(competitor.performance)}`}>
                  {competitor.performance}
                </TableCell>
                <TableCell className={`text-right ${getScoreColorClass(competitor.seo)}`}>
                  {competitor.seo}
                </TableCell>
                <TableCell className={`text-right ${getScoreColorClass(competitor.accessibility)}`}>
                  {competitor.accessibility}
                </TableCell>
                <TableCell className={`text-right ${getScoreColorClass(competitor.bestPractices)}`}>
                  {competitor.bestPractices}
                </TableCell>
                <TableCell className="text-right">
                  {formatNumber(competitor.traffic.monthlyVisits)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Competitor insights dialog */}
      <div className="mt-4 text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
              View Competitive Insights
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Competitive Analysis</DialogTitle>
              <DialogDescription>
                Here's how you compare to your competitors in key areas.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {/* Calculate averages */}
              {(() => {
                const avgCompPerformance = auditResults.competitors.reduce((sum, comp) => sum + comp.performance, 0) / auditResults.competitors.length;
                const avgCompSEO = auditResults.competitors.reduce((sum, comp) => sum + comp.seo, 0) / auditResults.competitors.length;
                const avgCompAccess = auditResults.competitors.reduce((sum, comp) => sum + comp.accessibility, 0) / auditResults.competitors.length;
                const avgCompBP = auditResults.competitors.reduce((sum, comp) => sum + comp.bestPractices, 0) / auditResults.competitors.length;
                const avgCompTraffic = auditResults.competitors.reduce((sum, comp) => sum + comp.traffic.monthlyVisits, 0) / auditResults.competitors.length;
                
                return (
                  <>
                    <p className="text-sm">
                      <strong>Performance:</strong> You are 
                      <span className={auditResults.performance.score >= avgCompPerformance ? " text-green-500" : " text-red-500"}>
                        {auditResults.performance.score >= avgCompPerformance ? " outperforming" : " underperforming"} the competition by 
                        {Math.abs(auditResults.performance.score - avgCompPerformance).toFixed(1)} points
                      </span>
                    </p>
                    
                    <p className="text-sm">
                      <strong>SEO:</strong> You are 
                      <span className={auditResults.seo.score >= avgCompSEO ? " text-green-500" : " text-red-500"}>
                        {auditResults.seo.score >= avgCompSEO ? " outperforming" : " underperforming"} the competition by 
                        {Math.abs(auditResults.seo.score - avgCompSEO).toFixed(1)} points
                      </span>
                    </p>
                    
                    <p className="text-sm">
                      <strong>Traffic:</strong> Your site gets 
                      <span className={auditResults.traffic.monthlyVisits >= avgCompTraffic ? " text-green-500" : " text-red-500"}>
                        {auditResults.traffic.monthlyVisits >= avgCompTraffic ? " more" : " less"} traffic than competitors by 
                        {Math.abs(auditResults.traffic.monthlyVisits - avgCompTraffic).toLocaleString()} visits monthly
                      </span>
                    </p>
                    
                    <p className="text-sm font-medium mt-4">Key Opportunities:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      {auditResults.performance.score < avgCompPerformance && 
                        <li>Improve site performance to match competition</li>}
                      {auditResults.seo.score < avgCompSEO && 
                        <li>Enhance SEO strategy to rank better in search</li>}
                      {auditResults.accessibility.score < avgCompAccess && 
                        <li>Address accessibility issues to improve user experience</li>}
                      {auditResults.traffic.monthlyVisits < avgCompTraffic && 
                        <li>Implement traffic growth strategies to catch up to competitors</li>}
                    </ul>
                  </>
                );
              })()}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CompetitorBenchmark;
