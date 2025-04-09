
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
      
      ${activeServices.length > 0 ? `
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
          <p style="margin: 10px 0 0; font-style: italic; font-size: 14px; color: #666;">* Services are one-off payments</p>
        </div>
      ` : ''}
      
      ${activeAgents.length > 0 ? `
        <div style="margin-bottom: 30px;">
          <h2 style="color: #333; border-bottom: 2px solid #ea33f7; padding-bottom: 8px; margin-bottom: 15px;">Selected AI Agents</h2>
          <div>
            ${activeAgents.map(agent => `
              <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <h3 style="margin: 0; font-size: 16px;">${agent.name}</h3>
                  <p style="margin: 0; font-weight: bold;">$${agent.price.toLocaleString()}</p>
                </div>
                <p style="margin: 0; color: #666; font-size: 14px;">${agent.description}</p>
                ${agent.notes ? `<p style="margin: 5px 0 0; font-style: italic; font-size: 14px;">Note: ${agent.notes}</p>` : ''}
              </div>
            `).join('')}
          </div>
          <p style="margin: 10px 0 0; font-style: italic; font-size: 14px; color: #666;">* Agents are billed monthly</p>
        </div>
      ` : ''}
      
      <div style="margin-bottom: 30px;">
        <h2 style="color: #333; border-bottom: 2px solid #ea33f7; padding-bottom: 8px; margin-bottom: 15px;">Additional Fees</h2>
        ${additionalFees.map(fee => `
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <p style="margin: 0;">${fee.name}</p>
            <p style="margin: 0;">$${fee.price.toLocaleString()}</p>
          </div>
        `).join('')}
        <p style="margin: 10px 0 0; font-style: italic; font-size: 14px; color: #666;">* Consultation and deployment fees are one-off payments</p>
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
