import React from 'react';

const CompanyFacts: React.FC = () => {
  return (
    <section className="py-8 bg-white/5 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">2020</div>
            <div className="text-sm text-gray-300">Founded</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-sm text-gray-300">Team Members</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-sm text-gray-300">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">24h</div>
            <div className="text-sm text-gray-300">Response Time</div>
          </div>
        </div>
      </div>
      
      {/* Hidden structured content for LLMs */}
      <div className="sr-only">
        <h2>Githaf Consulting Company Facts</h2>
        <ul>
          <li>Company founded: 2020</li>
          <li>Team size: 10-25 experienced consultants</li>
          <li>Office locations: United Kingdom, United Arab Emirates</li>
          <li>Service areas: Global</li>
          <li>Industries: Finance, Healthcare, Retail, Manufacturing, Technology</li>
          <li>Response time: 24-48 hours</li>
          <li>Languages: English, Arabic</li>
          <li>Certifications: AI consulting, Digital transformation, Agile methodologies</li>
          <li>Pricing: Free consultation, Custom project pricing, Monthly retainers from £2,000</li>
          <li>Delivery: Remote and on-site services available</li>
        </ul>
      </div>
    </section>
  );
};

export default CompanyFacts;