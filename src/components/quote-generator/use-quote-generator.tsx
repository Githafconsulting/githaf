
import { useState, useEffect } from 'react';
import { SelectedService, AdditionalFee, Discount, Totals, ConvertedCurrency, ClientInfo } from './types';
import { initialServices, initialAdditionalFees, initialDiscount, initialTotals } from './initial-data';
import { 
  createServiceToggleHandler,
  createServicePriceChangeHandler,
  createServiceNoteChangeHandler,
  createRemoveServiceHandler,
  createAdditionalFeeChangeHandler,
  createDiscountChangeHandler,
  createDiscountTypeChangeHandler
} from './handlers';
import { generatePDF } from './pdf-generator';

// Export types using the 'export type' syntax to comply with isolatedModules
export type { SelectedService, AdditionalFee, Discount, Totals, ClientInfo };

// Initial client info
const initialClientInfo: ClientInfo = {
  name: '',
  telephone: ''
};

export const useQuoteGenerator = () => {
  // Try to restore session data
  const sessionData = sessionStorage.getItem('quoteGeneratorData');
  const parsedSessionData = sessionData ? JSON.parse(sessionData) : null;

  // Initialize selected services with session data if available
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    parsedSessionData?.selectedServices || 
    initialServices.map(service => ({
      ...service,
      selected: false,
      price: service.defaultPrice,
      notes: '',
    }))
  );

  // Additional fees with session data if available
  const [additionalFees, setAdditionalFees] = useState<AdditionalFee[]>(
    parsedSessionData?.additionalFees || initialAdditionalFees
  );

  // Discount with session data if available
  const [discount, setDiscount] = useState<Discount>(
    parsedSessionData?.discount || initialDiscount
  );

  // Client info with session data if available
  const [clientInfo, setClientInfo] = useState<ClientInfo>(
    parsedSessionData?.clientInfo || initialClientInfo
  );

  // Calculated totals
  const [totals, setTotals] = useState<Totals>(initialTotals);

  // Calculate totals whenever selected services or fees change
  useEffect(() => {
    const servicesSubtotal = selectedServices
      .filter(service => service.selected)
      .reduce((sum, service) => sum + service.price, 0);

    const feesTotal = additionalFees.reduce((sum, fee) => sum + fee.price, 0);
    
    const subtotal = servicesSubtotal + feesTotal;
    
    let discountAmount = 0;
    if (discount.type === 'percentage') {
      discountAmount = subtotal * (discount.value / 100);
    } else {
      discountAmount = discount.value;
    }
    
    const finalTotal = subtotal - discountAmount;

    setTotals({
      subtotal: servicesSubtotal,
      feesTotal,
      discountAmount,
      finalTotal,
    });
  }, [selectedServices, additionalFees, discount]);

  // Save data to session storage when state changes
  useEffect(() => {
    const dataToSave = {
      selectedServices,
      additionalFees,
      discount,
      clientInfo
    };
    
    sessionStorage.setItem('quoteGeneratorData', JSON.stringify(dataToSave));
  }, [selectedServices, additionalFees, discount, clientInfo]);

  // Create handlers
  const handleServiceToggle = createServiceToggleHandler(setSelectedServices);
  const handleServicePriceChange = createServicePriceChangeHandler(setSelectedServices);
  const handleServiceNoteChange = createServiceNoteChangeHandler(setSelectedServices);
  const handleRemoveService = createRemoveServiceHandler(setSelectedServices);
  const handleAdditionalFeeChange = createAdditionalFeeChangeHandler(setAdditionalFees);
  const handleDiscountChange = createDiscountChangeHandler(setDiscount);
  const handleDiscountTypeChange = createDiscountTypeChangeHandler(setDiscount);

  // Handler for client info changes
  const handleClientInfoChange = (field: keyof ClientInfo, value: string) => {
    setClientInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // PDF generator wrapper
  const handleGenerateReport = async (convertedCurrency?: ConvertedCurrency) => {
    await generatePDF(selectedServices, additionalFees, discount, totals, clientInfo, convertedCurrency);
  };

  return {
    services: initialServices,
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
    handleClientInfoChange,
    handleGenerateReport,
  };
};
