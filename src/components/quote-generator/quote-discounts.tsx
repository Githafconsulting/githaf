
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Discount } from './types';

interface QuoteDiscountsProps {
  discount: Discount;
  onDiscountChange: (value: number) => void;
  onDiscountTypeChange: (type: 'percentage' | 'amount') => void;
}

export const QuoteDiscounts: React.FC<QuoteDiscountsProps> = ({
  discount,
  onDiscountChange,
  onDiscountTypeChange,
}) => {
  // Handle focus to select all text
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Discount</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroup 
              value={discount.type} 
              onValueChange={(value) => onDiscountTypeChange(value as 'percentage' | 'amount')}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="percentage" id="discount-percentage" />
                <Label htmlFor="discount-percentage" className="font-normal">
                  Percentage
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="amount" id="discount-amount" />
                <Label htmlFor="discount-amount" className="font-normal">
                  Fixed Amount
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 items-center">
          <Label htmlFor="discount-value">
            {discount.type === 'percentage' ? 'Discount Percentage' : 'Discount Amount'}
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">{discount.type === 'percentage' ? '%' : '$'}</span>
            </div>
            <Input
              id="discount-value"
              type="number"
              min={0}
              value={discount.value || ''} // Use empty string when value is 0
              onChange={(e) => onDiscountChange(parseFloat(e.target.value) || 0)}
              onFocus={handleFocus}
              className="pl-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
