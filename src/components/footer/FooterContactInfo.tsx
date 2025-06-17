
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const FooterContactInfo: React.FC = () => {
  return (
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="p-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform duration-300">
            <MapPin size={16} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-white font-medium text-sm">Presence</p>
            <p className="text-gray-300 text-sm">UAE, UK</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
          <div className="p-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform duration-300">
            <Mail size={16} className="text-white" />
          </div>
          <div className="text-left">
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
