
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const FooterContactInfo: React.FC = () => {
  return (
    <div className="enhanced-card p-6">
      <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
      <div className="space-y-4">
        <div className="glass rounded-lg p-4 hover:bg-white/5 transition-all duration-300 group">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Presence</p>
              <p className="text-gray-300 text-sm">UAE, UK</p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-lg p-4 hover:bg-white/5 transition-all duration-300 group">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform duration-300">
              <Mail size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-medium">Email</p>
              <a href="mailto:info@githafconsulting.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                info@githafconsulting.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;
