
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import { SelectedService, AdditionalFee, Discount, Totals, ClientInfo } from './types';
import { CurrencyConverter } from './currency-converter';

interface QuoteSummaryProps {
  selectedServices: SelectedService[];
  additionalFees: AdditionalFee[];
  discount: Discount;
  totals: Totals;
  clientInfo: ClientInfo;
  onGenerateReport: (convertedCurrency?: { code: string; amount: number }) => void;
}

export const QuoteSummary: React.FC<QuoteSummaryProps> = ({
  selectedServices,
  additionalFees,
  discount,
  totals,
  clientInfo,
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

  // Get services and agents separately
  const activeStandardServices = activeServices.filter(service => service.type === 'service');
  const activeAgents = activeServices.filter(service => service.type === 'agent');

  return (
    <Card className="sticky top-24">
      <CardHeader className="bg-accent/50 rounded-t-lg">
        <CardTitle className="text-xl">Quote Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Client Information */}
        {(clientInfo.name || clientInfo.telephone) && (
          <div className="mb-4 pb-4 border-b">
            <h3 className="font-medium mb-2 text-lg">Client Details</h3>
            {clientInfo.name && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{clientInfo.name}</span>
              </div>
            )}
            {clientInfo.telephone && (
              <div className="flex justify-between mt-1">
                <span className="text-muted-foreground">Telephone:</span>
                <span className="font-medium">{clientInfo.telephone}</span>
              </div>
            )}
          </div>
        )}
        
        {activeServices.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No services selected yet.</p>
            <p className="text-sm mt-2">Select services from the list to create your quote.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Selected Services */}
            {activeStandardServices.length > 0 && (
              <div>
                <h3 className="font-medium mb-3 text-lg">Selected Services</h3>
                <ul className="space-y-3">
                  {activeStandardServices.map(service => (
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
                <p className="text-xs text-muted-foreground mt-2 italic">
                  * Services are one-off payments
                </p>
              </div>
            )}
            
            {/* Selected Agents */}
            {activeAgents.length > 0 && (
              <div>
                <h3 className="font-medium mb-3 text-lg">Selected Agents</h3>
                <ul className="space-y-3">
                  {activeAgents.map(agent => (
                    <li key={agent.id} className="flex justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        {agent.notes && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Note: {agent.notes}
                          </p>
                        )}
                      </div>
                      <span className="font-medium">${agent.price.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  * Agents are billed monthly
                </p>
              </div>
            )}
            
            {/* Services Subtotal */}
            <div className="flex justify-between pt-2">
              <span className="font-medium text-sm">Services Subtotal</span>
              <span className="font-medium">${totals.subtotal.toLocaleString()}</span>
            </div>
            
            {/* Additional Fees */}
            <div>
              <h3 className="font-medium mb-3 text-lg">Additional Fees</h3>
              <ul className="space-y-2">
                {additionalFees.map(fee => (
                  <li key={fee.id} className="flex justify-between">
                    <span>{fee.name}</span>
                    <span>${fee.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-2 pt-2 border-t">
                <span className="text-sm">Fees Subtotal</span>
                <span>${totals.feesTotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                * Consultation and deployment fees are one-off payments
              </p>
            </div>
            
            {/* Discount */}
            {totals.discountAmount > 0 && (
              <div>
                <h3 className="font-medium mb-2 text-lg">Applied Discount</h3>
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
              <div className="flex justify-between text-lg">
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
