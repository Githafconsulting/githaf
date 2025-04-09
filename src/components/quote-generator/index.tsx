
import React from 'react';
import { QuoteServiceTable } from './quote-service-table';
import { QuoteSummary } from './quote-summary';
import { QuoteAdditionalFees } from './quote-additional-fees';
import { QuoteDiscounts } from './quote-discounts';
import { ClientInfoSection } from './client-info-section';
import { AgentsSection } from './agents-section';
import { useQuoteGenerator } from './use-quote-generator';
import { Card, CardContent } from '@/components/ui/card';

export const QuoteGenerator = () => {
  const {
    selectedServices,
    additionalFees,
    discount,
    totals,
    clientInfo,
    handleServiceToggle,
    handleServicePriceChange,
    handleServiceNoteChange,
    handleRemoveService,
    handleAdditionalFeeChange,
    handleDiscountChange,
    handleDiscountTypeChange,
    handleGenerateReport,
    handleClientInfoChange
  } = useQuoteGenerator();

  // Filter agents and services from the selected services to ensure proper typing
  const agents = selectedServices.filter(service => service.type === 'agent');
  const standardServices = selectedServices.filter(service => service.type === 'service');
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="pt-6">
            {/* Client Information Section */}
            <ClientInfoSection 
              clientInfo={clientInfo}
              onClientInfoChange={handleClientInfoChange}
            />

            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <QuoteServiceTable 
              services={standardServices}
              selectedServices={selectedServices}
              onToggle={handleServiceToggle}
              onPriceChange={handleServicePriceChange}
              onNoteChange={handleServiceNoteChange}
              onRemove={handleRemoveService}
            />

            {/* Collapsible Agents Section */}
            <AgentsSection 
              agents={agents}
              selectedServices={selectedServices}
              onToggle={handleServiceToggle}
              onPriceChange={handleServicePriceChange}
              onNoteChange={handleServiceNoteChange}
              onRemove={handleRemoveService}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <QuoteAdditionalFees
                fees={additionalFees}
                onChange={handleAdditionalFeeChange}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <QuoteDiscounts
                discount={discount}
                onDiscountChange={handleDiscountChange}
                onDiscountTypeChange={handleDiscountTypeChange}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="lg:col-span-1">
        <QuoteSummary
          selectedServices={selectedServices}
          additionalFees={additionalFees}
          discount={discount}
          totals={totals}
          clientInfo={clientInfo}
          onGenerateReport={handleGenerateReport}
        />
      </div>
    </div>
  );
};
