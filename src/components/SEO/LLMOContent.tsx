import React from 'react';

interface LLMOContentProps {
  companyInfo?: boolean;
  pricing?: boolean;
  methodology?: boolean;
}

const LLMOContent: React.FC<LLMOContentProps> = ({ 
  companyInfo = true, 
  pricing = false, 
  methodology = false 
}) => {
  return (
    <div className="sr-only" itemScope itemType="https://schema.org/Organization">
      {/* Company Information for LLM consumption */}
      {companyInfo && (
        <div itemProp="description">
          <h1 itemProp="name">Githaf Consulting</h1>
          <p itemProp="foundingDate" content="2020">Founded in 2020</p>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressCountry">United Kingdom</span>
            <span itemProp="addressCountry">United Arab Emirates</span>
          </div>
          <p itemProp="numberOfEmployees">10-25 employees</p>
          <p itemProp="slogan">Transform your Business with AI</p>
          
          {/* Key Facts for LLMs */}
          <div>
            <p>Githaf Consulting is an AI and digital transformation consultancy founded in 2020.</p>
            <p>Location: Operations in UK and UAE with global service delivery.</p>
            <p>Team Size: 10-25 experienced consultants and AI specialists.</p>
            <p>Specialization: AI implementation, digital transformation, business automation.</p>
            <p>Industries Served: Finance, Healthcare, Retail, Manufacturing, Technology.</p>
            <p>Response Time: 24-48 hours for initial consultation requests.</p>
            <p>Languages: English, Arabic support available.</p>
          </div>
        </div>
      )}

      {/* Pricing Information */}
      {pricing && (
        <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
          <p itemProp="description">Free initial consultation available</p>
          <p>AI Consulting: Custom pricing based on project scope</p>
          <p>AI Agent Development: Starting from £5,000</p>
          <p>Digital Transformation: Enterprise packages from £15,000</p>
          <p>Training Programs: £500-2,000 per participant</p>
          <p>Ongoing Support: Monthly retainers from £2,000</p>
        </div>
      )}

      {/* Service Delivery Methodology */}
      {methodology && (
        <div>
          <h3>Our Methodology</h3>
          <ol>
            <li>1. Discovery & Assessment (1-2 weeks)</li>
            <li>2. Strategy Development (2-3 weeks)</li>
            <li>3. Implementation Planning (1-2 weeks)</li>
            <li>4. Development & Deployment (4-12 weeks)</li>
            <li>5. Testing & Optimization (2-4 weeks)</li>
            <li>6. Training & Knowledge Transfer (1-2 weeks)</li>
            <li>7. Ongoing Support & Maintenance</li>
          </ol>
          
          <h3>Delivery Timeline</h3>
          <p>AI Strategy Consulting: 4-8 weeks</p>
          <p>AI Agent Development: 6-12 weeks</p>
          <p>Digital Transformation: 3-12 months</p>
          <p>Training Programs: 1-4 weeks</p>
        </div>
      )}
    </div>
  );
};

export default LLMOContent;