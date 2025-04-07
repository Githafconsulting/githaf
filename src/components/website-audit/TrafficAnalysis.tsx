
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, BarChart, Clock } from 'lucide-react';
import { AuditResult } from '@/services/audit/types';

interface TrafficAnalysisProps {
  traffic: AuditResult['traffic'];
}

const TrafficAnalysis: React.FC<TrafficAnalysisProps> = ({ traffic }) => {
  // Format traffic numbers with comma separators
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Traffic Analysis</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              Monthly Visits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatNumber(traffic.monthlyVisits)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
              Organic Traffic
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatNumber(traffic.organicTraffic)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <BarChart className="h-4 w-4 mr-2 text-yellow-500" />
              Bounce Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{traffic.bounceRate}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-purple-500" />
              Avg. Session
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{traffic.avgSessionDuration}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrafficAnalysis;
