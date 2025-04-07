
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export interface Service {
  id: string;
  name: string;
  description: string;
  defaultPrice: number;
}

export interface SelectedService extends Service {
  selected: boolean;
  price: number;
  notes: string;
}

export interface AdditionalFee {
  id: string;
  name: string;
  price: number;
}

export interface Discount {
  type: 'percentage' | 'amount';
  value: number;
}

export interface Totals {
  subtotal: number;
  feesTotal: number;
  discountAmount: number;
  finalTotal: number;
}

export const useQuoteGenerator = () => {
  // Available services
  const initialServices: Service[] = [
    { id: '1', name: 'Website Development', description: 'Custom website design and development', defaultPrice: 1200 },
    { id: '2', name: 'SaaS Conversion', description: 'Convert your application to SaaS model', defaultPrice: 1800 },
    { id: '3', name: 'AI Chatbot Integration', description: 'Add intelligent chatbot to your website', defaultPrice: 1000 },
    { id: '4', name: 'Voice Agent Setup', description: 'Implement voice assistant functionality', defaultPrice: 1500 },
    { id: '5', name: 'Lead Generation Tool Deployment', description: 'Tools to capture and manage leads', defaultPrice: 900 },
    { id: '6', name: 'SEO AI Optimization', description: 'AI-powered SEO enhancement', defaultPrice: 800 },
    { id: '7', name: 'Sales Voice Agent with Call & Report', description: 'Voice assistant with reporting capabilities', defaultPrice: 2000 },
    { id: '8', name: 'Ad Campaign Management', description: 'Digital advertising campaign setup and management', defaultPrice: 1000 },
    { id: '9', name: 'Custom AI Agent Development', description: 'Develop tailored AI solutions', defaultPrice: 2200 },
    { id: '10', name: 'AI Personal Assistant', description: 'Custom AI assistant for productivity', defaultPrice: 2000 },
  ];

  // Initialize selected services
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    initialServices.map(service => ({
      ...service,
      selected: false,
      price: service.defaultPrice,
      notes: '',
    }))
  );

  // Additional fees
  const [additionalFees, setAdditionalFees] = useState<AdditionalFee[]>([
    { id: 'fee1', name: 'Consultation Fee', price: 500 },
    { id: 'fee2', name: 'Deployment Fee', price: 750 },
  ]);

  // Discount
  const [discount, setDiscount] = useState<Discount>({
    type: 'percentage',
    value: 0,
  });

  // Calculated totals
  const [totals, setTotals] = useState<Totals>({
    subtotal: 0,
    feesTotal: 0,
    discountAmount: 0,
    finalTotal: 0,
  });

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

  // Handlers
  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: !service.selected } 
          : service
      )
    );
  };

  const handleServicePriceChange = (serviceId: string, price: number) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, price } 
          : service
      )
    );
  };

  const handleServiceNoteChange = (serviceId: string, notes: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, notes } 
          : service
      )
    );
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: false, notes: '' } 
          : service
      )
    );
  };

  const handleAdditionalFeeChange = (feeId: string, price: number) => {
    setAdditionalFees(prev => 
      prev.map(fee => 
        fee.id === feeId 
          ? { ...fee, price } 
          : fee
      )
    );
  };

  const handleDiscountChange = (value: number) => {
    setDiscount(prev => ({ ...prev, value }));
  };

  const handleDiscountTypeChange = (type: 'percentage' | 'amount') => {
    setDiscount(prev => ({ ...prev, type }));
  };

  const handleGenerateReport = () => {
    // In a real app, this would generate a PDF or other report format
    // For now, we'll just show a toast notification
    const selectedCount = selectedServices.filter(s => s.selected).length;
    
    if (selectedCount === 0) {
      toast.error("Please select at least one service to generate a quote");
      return;
    }
    
    toast.success("Quote generated successfully! The download will start shortly.");
    
    // Simulate a download delay
    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob(
        [JSON.stringify({ 
          services: selectedServices.filter(s => s.selected), 
          additionalFees, 
          discount, 
          totals 
        }, null, 2)], 
        { type: "text/plain" }
      );
      element.href = URL.createObjectURL(file);
      element.download = "custom-quote.json";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1500);
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
