
import { useState, useEffect } from 'react';
import { SelectedService, AdditionalFee, Discount, Totals, ConvertedCurrency } from './types';
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
import { saveToSession, loadFromSession, STORAGE_KEYS } from './session-storage';

// Export types using the 'export type' syntax to comply with isolatedModules
export type { SelectedService, AdditionalFee, Discount, Totals };

export const useQuoteGenerator = () => {
  // Initialize selected services from session storage or default
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(() => 
    loadFromSession(STORAGE_KEYS.SELECTED_SERVICES, 
      initialServices.map(service => ({
        ...service,
        selected: false,
        price: service.defaultPrice,
        notes: '',
      }))
    )
  );

  // Additional fees from session storage or default
  const [additionalFees, setAdditionalFees] = useState<AdditionalFee[]>(() => 
    loadFromSession(STORAGE_KEYS.ADDITIONAL_FEES, initialAdditionalFees)
  );

  // Discount from session storage or default
  const [discount, setDiscount] = useState<Discount>(() => 
    loadFromSession(STORAGE_KEYS.DISCOUNT, initialDiscount)
  );

  // Calculated totals
  const [totals, setTotals] = useState<Totals>(initialTotals);

  // Save to session storage whenever state changes
  useEffect(() => {
    saveToSession(STORAGE_KEYS.SELECTED_SERVICES, selectedServices);
  }, [selectedServices]);

  useEffect(() => {
    saveToSession(STORAGE_KEYS.ADDITIONAL_FEES, additionalFees);
  }, [additionalFees]);

  useEffect(() => {
    saveToSession(STORAGE_KEYS.DISCOUNT, discount);
  }, [discount]);

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

  // Create handlers
  const handleServiceToggle = createServiceToggleHandler(setSelectedServices);
  const handleServicePriceChange = createServicePriceChangeHandler(setSelectedServices);
  const handleServiceNoteChange = createServiceNoteChangeHandler(setSelectedServices);
  const handleRemoveService = createRemoveServiceHandler(setSelectedServices);
  const handleAdditionalFeeChange = createAdditionalFeeChangeHandler(setAdditionalFees);
  const handleDiscountChange = createDiscountChangeHandler(setDiscount);
  const handleDiscountTypeChange = createDiscountTypeChangeHandler(setDiscount);

  // PDF generator wrapper
  const handleGenerateReport = async (convertedCurrency?: ConvertedCurrency) => {
    await generatePDF(selectedServices, additionalFees, discount, totals, convertedCurrency);
  };

  return {
    services: initialServices,
    selectedServices,
    additionalFees,
    discount,
    totals,
    handleServiceToggle,
    handleServicePriceChange,
    handleServiceNoteChange,
    handleRemoveService,
    handleAdditionalFeeChange,
    handleDiscountChange,
    handleDiscountTypeChange,
    handleGenerateReport,
  };
};
