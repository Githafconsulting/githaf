import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  const handleGenerateReport = async (convertedCurrency?: { code: string; amount: number }) => {
    const selectedCount = selectedServices.filter(s => s.selected).length;
    
    if (selectedCount === 0) {
      toast.error("Please select at least one service to generate a quote");
      return;
    }
    
    toast.success("Generating your quote PDF...");
    
    // Create a temporary div to render our PDF content
    const reportContainer = document.createElement('div');
    reportContainer.className = 'pdf-report';
    reportContainer.style.width = '210mm'; // A4 width
    reportContainer.style.padding = '15mm';
    reportContainer.style.fontFamily = 'Arial, sans-serif';
    reportContainer.style.color = '#333';
    reportContainer.style.position = 'absolute';
    reportContainer.style.left = '-9999px';
    document.body.appendChild(reportContainer);
    
    // Format date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Get active services
    const activeServices = selectedServices.filter(service => service.selected);
    
    // Create quote content HTML
    reportContainer.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
          <div>
            <h1 style="color: #ea33f7; font-size: 28px; margin: 0;">CUSTOM QUOTE</h1>
            <p style="margin: 5px 0 0; color: #666;">Generated on ${formattedDate}</p>
          </div>
          <div style="text-align: right;">
            <img src="/logo.svg" alt="Githaf Consulting" style="width: 100px; height: auto; margin-bottom: 10px;">
            <p style="margin: 0; font-weight: bold;">Githaf Consulting</p>
            <p style="margin: 0; font-size: 14px;">AI and Digital Transformation</p>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h2 style="color: #333; border-bottom: 2px solid #ea33f7; padding-bottom: 8px; margin-bottom: 15px;">Selected Services</h2>
          <div>
            ${activeServices.map(service => `
              <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <h3 style="margin: 0; font-size: 16px;">${service.name}</h3>
                  <p style="margin: 0; font-weight: bold;">$${service.price.toLocaleString()}</p>
                </div>
                <p style="margin: 0; color: #666; font-size: 14px;">${service.description}</p>
                ${service.notes ? `<p style="margin: 5px 0 0; font-style: italic; font-size: 14px;">Note: ${service.notes}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h2 style="color: #333; border-bottom: 2px solid #ea33f7; padding-bottom: 8px; margin-bottom: 15px;">Additional Fees</h2>
          ${additionalFees.map(fee => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <p style="margin: 0;">${fee.name}</p>
              <p style="margin: 0;">$${fee.price.toLocaleString()}</p>
            </div>
          `).join('')}
        </div>
        
        ${discount.value > 0 ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #333; border-bottom: 2px solid #ea33f7; padding-bottom: 8px; margin-bottom: 15px;">Applied Discount</h2>
            <div style="display: flex; justify-content: space-between;">
              <p style="margin: 0;">${discount.type === 'percentage' ? `${discount.value}% Discount` : 'Fixed Discount'}</p>
              <p style="margin: 0; color: #ea33f7;">-$${totals.discountAmount.toLocaleString()}</p>
            </div>
          </div>
        ` : ''}
        
        <div style="margin: 40px 0; border-top: 2px solid #ddd; padding-top: 20px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <h2 style="margin: 0; font-size: 20px;">Total</h2>
            <h2 style="margin: 0; font-size: 24px; color: #ea33f7;">$${totals.finalTotal.toLocaleString()}</h2>
          </div>
          
          ${convertedCurrency ? `
            <div style="display: flex; justify-content: space-between; margin-top: 5px;">
              <p style="margin: 0; font-size: 16px;">Converted Total (${convertedCurrency.code})</p>
              <p style="margin: 0; font-size: 16px; color: #ea33f7;">${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: convertedCurrency.code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(convertedCurrency.amount)}</p>
            </div>
          ` : ''}
        </div>
        
        <div style="margin-top: 60px; border-top: 1px solid #eee; padding-top: 20px; font-size: 14px; color: #777; text-align: center;">
          <p style="margin-bottom: 10px;">This quote is valid for 30 days from the date of issue.</p>
          <p style="margin-bottom: 10px;">To proceed with this quote, please contact us at contact@githaf.com or call us at +1 (555) 123-4567.</p>
          <p>© ${new Date().getFullYear()} Githaf Consulting. All rights reserved.</p>
        </div>
      </div>
    `;
    
    try {
      // Generate PDF from the HTML content
      const canvas = await html2canvas(reportContainer, {
        scale: 2, // Higher scale for better quality
        logging: false,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210; // A4 width in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('githaf-custom-quote.pdf');
      
      // Clean up
      document.body.removeChild(reportContainer);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('There was an error generating your PDF. Please try again.');
      document.body.removeChild(reportContainer);
    }
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
