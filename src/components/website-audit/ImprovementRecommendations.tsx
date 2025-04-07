
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ImprovementData } from '@/services/audit/types';

interface ImprovementRecommendationsProps {
  improvementsData: ImprovementData[];
  onBack: () => void;
}

const ImprovementRecommendations: React.FC<ImprovementRecommendationsProps> = ({ 
  improvementsData, 
  onBack 
}) => {
  return (
    <div className="mt-8 reveal fade-in">
      <h2 className="text-2xl font-bold mb-6">Recommended Improvements</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">What Is Required</TableHead>
              <TableHead className="w-1/3">Your Current Site</TableHead>
              <TableHead className="w-1/3">What We Will Improve</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {improvementsData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.requirement}</TableCell>
                <TableCell className="text-muted-foreground">{item.current}</TableCell>
                <TableCell className="text-primary font-medium">{item.improvement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-center mt-12">
        <Button onClick={onBack} variant="outline" className="mr-4">
          Back to Results
        </Button>
        <Button size="lg" className="px-8">
          Get a Quote
        </Button>
      </div>
    </div>
  );
};

export default ImprovementRecommendations;
