
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const FooterContactInfo: React.FC = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <MapPin size={16} className="text-gray-300" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Global</p>
            <p className="text-gray-300 text-sm">United Kingdom & United Arab Emirates</p>
            <p className="text-gray-300 text-sm">Global service delivery available</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <Mail size={16} className="text-gray-300" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Email</p>
            <div 
              className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer select-none"
              onClick={() => {
                const email = "info" + "@" + "githafconsulting" + "." + "com";
                window.location.href = "mailto:" + email;
              }}
              style={{ userSelect: 'none' }}
            >
              info[at]githafconsulting[dot]com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;
