
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Discount } from './use-quote-generator';

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
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Discount</h3>
      
      <div className="space-y-4">
        <RadioGroup 
          defaultValue={discount.type} 
          onValueChange={(value) => onDiscountTypeChange(value as 'percentage' | 'amount')}
          className="flex space-x-4"
        >
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="percentage" id="discount-percentage" />
            </FormControl>
            <FormLabel htmlFor="discount-percentage" className="font-normal">
              Percentage
            </FormLabel>
          </FormItem>
          
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="amount" id="discount-amount" />
            </FormControl>
            <FormLabel htmlFor="discount-amount" className="font-normal">
              Fixed Amount
            </FormLabel>
          </FormItem>
        </RadioGroup>
        
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
              value={discount.value}
              onChange={(e) => onDiscountChange(parseFloat(e.target.value) || 0)}
              className="pl-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
