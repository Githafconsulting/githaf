
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AdditionalFee } from './use-quote-generator';

interface QuoteAdditionalFeesProps {
  fees: AdditionalFee[];
  onChange: (feeId: string, price: number) => void;
}

export const QuoteAdditionalFees: React.FC<QuoteAdditionalFeesProps> = ({ 
  fees, 
  onChange 
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Additional Fees</h3>
      <div className="space-y-4">
        {fees.map((fee) => (
          <div key={fee.id} className="grid grid-cols-2 gap-4 items-center">
            <Label htmlFor={`fee-${fee.id}`}>{fee.name}</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                id={`fee-${fee.id}`}
                type="number"
                min={0}
                value={fee.price}
                onChange={(e) => onChange(fee.id, parseFloat(e.target.value) || 0)}
                className="pl-7"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
