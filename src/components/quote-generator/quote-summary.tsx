
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import { SelectedService, AdditionalFee, Discount, Totals } from './use-quote-generator';
import { CurrencyConverter } from './currency-converter';

interface QuoteSummaryProps {
  selectedServices: SelectedService[];
  additionalFees: AdditionalFee[];
  discount: Discount;
  totals: Totals;
  onGenerateReport: (convertedCurrency?: { code: string; amount: number }) => void;
}

export const QuoteSummary: React.FC<QuoteSummaryProps> = ({
  selectedServices,
  additionalFees,
  discount,
  totals,
  onGenerateReport,
}) => {
  const activeServices = selectedServices.filter(service => service.selected);
  const [convertedCurrency, setConvertedCurrency] = useState<{ code: string; amount: number } | null>(null);

  const handleCurrencyConverted = (currencyCode: string, amount: number) => {
    setConvertedCurrency({ code: currencyCode, amount });
  };

  const handleGenerateReport = () => {
    onGenerateReport(convertedCurrency || undefined);
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="bg-accent/50 rounded-t-lg">
        <CardTitle className="text-xl">Quote Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {activeServices.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No services selected yet.</p>
            <p className="text-sm mt-2">Select services from the list to create your quote.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Selected Services */}
            <div>
              <h3 className="font-medium mb-3">Selected Services</h3>
              <ul className="space-y-3">
                {activeServices.map(service => (
                  <li key={service.id} className="flex justify-between border-b pb-2">
                    <div>
                      <p className="font-medium">{service.name}</p>
                      {service.notes && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Note: {service.notes}
                        </p>
                      )}
                    </div>
                    <span className="font-medium">${service.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Subtotal */}
            <div className="flex justify-between pt-2">
              <span className="font-medium">Services Subtotal</span>
              <span className="font-medium">${totals.subtotal.toLocaleString()}</span>
            </div>
            
            {/* Additional Fees */}
            <div>
              <h3 className="font-medium mb-3">Additional Fees</h3>
              <ul className="space-y-2">
                {additionalFees.map(fee => (
                  <li key={fee.id} className="flex justify-between">
                    <span>{fee.name}</span>
                    <span>${fee.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-2 pt-2 border-t">
                <span>Fees Subtotal</span>
                <span>${totals.feesTotal.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Discount */}
            {totals.discountAmount > 0 && (
              <div>
                <h3 className="font-medium mb-2">Applied Discount</h3>
                <div className="flex justify-between">
                  <span>
                    {discount.type === 'percentage' 
                      ? `${discount.value}% Discount` 
                      : 'Fixed Discount'}
                  </span>
                  <span>-${totals.discountAmount.toLocaleString()}</span>
                </div>
              </div>
            )}
            
            {/* Total */}
            <div className="pt-4 border-t border-t-2">
              <div className="flex justify-between text-xl">
                <span className="font-bold">Total</span>
                <span className="font-bold text-green-600">
                  ${totals.finalTotal.toLocaleString()}
                </span>
              </div>
              
              {/* Currency Converter */}
              {activeServices.length > 0 && (
                <CurrencyConverter 
                  amount={totals.finalTotal} 
                  baseCurrency="USD" 
                  onCurrencyConverted={handleCurrencyConverted}
                />
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          className="w-full" 
          onClick={handleGenerateReport}
          disabled={activeServices.length === 0}
        >
          <DownloadCloud className="mr-2 h-4 w-4" />
          Generate Quote Report
        </Button>
      </CardFooter>
    </Card>
  );
};
