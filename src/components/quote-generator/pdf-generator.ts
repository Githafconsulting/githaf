
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SelectedService, AdditionalFee, Discount, Totals, ConvertedCurrency } from './types';

export const generatePDF = async (
  selectedServices: SelectedService[],
  additionalFees: AdditionalFee[],
  discount: Discount,
  totals: Totals,
  convertedCurrency?: ConvertedCurrency
) => {
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
  
  // Get active services and agents
  const activeServices = selectedServices.filter(service => service.selected && service.type === 'service');
  const activeAgents = selectedServices.filter(service => service.selected && service.type === 'agent');
  
  // Create quote content HTML
  reportContainer.innerHTML = `
    <div style="max-width: 800px; margin: 0 auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px;">
        <div>
          <h1 style="color: #ea33f7; font-size: 20px; margin: 0; font-weight: bold;">CUSTOM QUOTE</h1>
          <p style="margin: 5px 0 0; color: #666; font-size: 10px;">Generated on ${formattedDate}</p>
        </div>
        <div style="text-align: right;">
          <img src="/logo.svg" alt="Githaf Consulting" style="width: 100px; height: auto; margin-bottom: 8px;">
          <p style="margin: 0; font-weight: bold; font-size: 14px; color: #ea33f7;">Githaf Consulting</p>
          <p style="margin: 0; font-size: 11px;">AI and Digital Transformation</p>
        </div>
      </div>
      
      ${activeServices.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #ea33f7; border-bottom: 2px solid #ea33f7; padding-bottom: 5px; margin-bottom: 10px; font-size: 14px;">Selected Services</h2>
          <div>
            ${activeServices.map(service => `
              <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                  <h3 style="margin: 0; font-size: 12px;">${service.name}</h3>
                  <p style="margin: 0; font-weight: bold; font-size: 12px;">$${service.price.toLocaleString()}</p>
                </div>
                <p style="margin: 0; color: #666; font-size: 9px;">${service.description}</p>
                ${service.notes ? `<p style="margin: 3px 0 0; font-style: italic; font-size: 8px;">Note: ${service.notes}</p>` : ''}
              </div>
            `).join('')}
          </div>
          <p style="margin: 5px 0 0; font-style: italic; font-size: 8px; color: #666;">* Services are one-off payments</p>
        </div>
      ` : ''}
      
      ${activeAgents.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #ea33f7; border-bottom: 2px solid #ea33f7; padding-bottom: 5px; margin-bottom: 10px; font-size: 14px;">Selected AI Agents</h2>
          <div>
            ${activeAgents.map(agent => `
              <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                  <h3 style="margin: 0; font-size: 12px;">${agent.name}</h3>
                  <p style="margin: 0; font-weight: bold; font-size: 12px;">$${agent.price.toLocaleString()}</p>
                </div>
                <p style="margin: 0; color: #666; font-size: 9px;">${agent.description}</p>
                ${agent.notes ? `<p style="margin: 3px 0 0; font-style: italic; font-size: 8px;">Note: ${agent.notes}</p>` : ''}
              </div>
            `).join('')}
          </div>
          <p style="margin: 5px 0 0; font-style: italic; font-size: 8px; color: #666;">* Agents are billed monthly</p>
        </div>
      ` : ''}
      
      <div style="margin-bottom: 20px;">
        <h2 style="color: #ea33f7; border-bottom: 2px solid #ea33f7; padding-bottom: 5px; margin-bottom: 10px; font-size: 14px;">Additional Fees</h2>
        ${additionalFees.map(fee => `
          <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <p style="margin: 0; font-size: 11px;">${fee.name}</p>
            <p style="margin: 0; font-size: 11px;">$${fee.price.toLocaleString()}</p>
          </div>
        `).join('')}
        <p style="margin: 5px 0 0; font-style: italic; font-size: 8px; color: #666;">* Consultation and deployment fees are one-off payments</p>
      </div>
      
      ${discount.value > 0 ? `
        <div style="margin-bottom: 20px;">
          <h2 style="color: #ea33f7; border-bottom: 2px solid #ea33f7; padding-bottom: 5px; margin-bottom: 10px; font-size: 14px;">Applied Discount</h2>
          <div style="display: flex; justify-content: space-between;">
            <p style="margin: 0; font-size: 11px;">${discount.type === 'percentage' ? `${discount.value}% Discount` : 'Fixed Discount'}</p>
            <p style="margin: 0; color: #ea33f7; font-size: 11px; font-weight: bold;">-$${totals.discountAmount.toLocaleString()}</p>
          </div>
        </div>
      ` : ''}
      
      <div style="margin: 30px 0; border-top: 2px solid #ea33f7; padding-top: 15px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; background-color: #fdf4ff; padding: 12px; border-radius: 6px; border: 1px solid #ea33f7;">
          <h2 style="margin: 0; font-size: 16px;">Total</h2>
          <h2 style="margin: 0; font-size: 18px; color: #ea33f7; background-color: white; padding: 3px 10px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">$${totals.finalTotal.toLocaleString()}</h2>
        </div>
        
        ${convertedCurrency ? `
          <div style="display: flex; justify-content: space-between; margin-top: 5px; padding: 0 12px;">
            <p style="margin: 0; font-size: 12px;">Converted Total (${convertedCurrency.code})</p>
            <p style="margin: 0; font-size: 12px; color: #ea33f7; font-weight: bold;">${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: convertedCurrency.code,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(convertedCurrency.amount)}</p>
          </div>
        ` : ''}
      </div>
      
      <div style="margin-top: 40px; border-top: 1px solid #ea33f7; padding-top: 15px; font-size: 8px; color: #555; text-align: center;">
        <p style="margin-bottom: 5px;">This quote is valid for 30 days from the date of issue.</p>
        <p style="margin-bottom: 5px;">To proceed with this quote, please contact us at info@githafconsulting.com</p>
        <p style="margin-bottom: 5px;">UK: +447530551944 | UAE: +971562078508</p>
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
