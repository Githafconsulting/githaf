
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, Phone } from 'lucide-react';
import { ClientInfo } from './types';

interface ClientInfoSectionProps {
  clientInfo: ClientInfo;
  onClientInfoChange: (field: keyof ClientInfo, value: string) => void;
}

export const ClientInfoSection: React.FC<ClientInfoSectionProps> = ({ 
  clientInfo, 
  onClientInfoChange 
}) => {
  return (
    <div className="mb-6 p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-3">Client Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="client-name">Client Name</Label>
          <div className="flex">
            <div className="relative flex-grow">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User className="h-4 w-4" />
              </div>
              <Input 
                id="client-name"
                value={clientInfo.name}
                onChange={(e) => onClientInfoChange('name', e.target.value)}
                className="pl-8"
                placeholder="Enter client name"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="client-telephone">Telephone</Label>
          <div className="flex">
            <div className="relative flex-grow">
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Phone className="h-4 w-4" />
              </div>
              <Input 
                id="client-telephone"
                value={clientInfo.telephone}
                onChange={(e) => onClientInfoChange('telephone', e.target.value)}
                className="pl-8"
                placeholder="Enter telephone number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
