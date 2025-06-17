
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
            <p className="text-white font-medium text-sm">Presence</p>
            <p className="text-gray-300 text-sm">UAE, UK</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gray-800">
            <Mail size={16} className="text-gray-300" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Email</p>
            <a href="mailto:info@githafconsulting.com" className="text-gray-300 text-sm hover:text-white transition-colors">
              info@githafconsulting.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;
