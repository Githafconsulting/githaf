import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface IndustryFilterProps {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  availableIndustries: string[];
}

const IndustryFilter: React.FC<IndustryFilterProps> = ({
  selectedIndustry,
  onIndustryChange,
  availableIndustries,
}) => {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium mb-2 text-slate-300">Filter by Industry</label>
      <Select value={selectedIndustry} onValueChange={onIndustryChange}>
        <SelectTrigger className="w-full max-w-xs bg-white/5 border-white/10 text-white">
          <SelectValue placeholder="All Industries" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700 z-50">
          <SelectItem value="all" className="text-white hover:bg-slate-700">
            All Industries
          </SelectItem>
          {availableIndustries.map((industry) => (
            <SelectItem 
              key={industry} 
              value={industry}
              className="text-white hover:bg-slate-700"
            >
              {industry}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default IndustryFilter;