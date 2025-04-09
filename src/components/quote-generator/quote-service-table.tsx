
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash } from 'lucide-react';
import { Service, SelectedService } from './use-quote-generator';

interface QuoteServiceTableProps {
  services: Service[];
  selectedServices: SelectedService[];
  onToggle: (serviceId: string) => void;
  onPriceChange: (serviceId: string, price: number) => void;
  onNoteChange: (serviceId: string, notes: string) => void;
  onRemove: (serviceId: string) => void;
}

export const QuoteServiceTable: React.FC<QuoteServiceTableProps> = ({
  services,
  selectedServices,
  onToggle,
  onPriceChange,
  onNoteChange,
  onRemove,
}) => {
  // Filter out only service type items (not agents)
  const serviceItems = services.filter(service => service.type === 'service');

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Select</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[120px]">Price ($)</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {serviceItems.map((service) => {
            const selectedService = selectedServices.find(s => s.id === service.id);
            const isSelected = selectedService?.selected || false;
            
            return (
              <TableRow key={service.id}>
                <TableCell>
                  <Checkbox 
                    id={`service-${service.id}`}
                    checked={isSelected}
                    onCheckedChange={() => onToggle(service.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <label 
                    htmlFor={`service-${service.id}`}
                    className="cursor-pointer"
                  >
                    {service.name}
                  </label>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {service.description}
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    min={0}
                    value={selectedService?.price || service.defaultPrice}
                    onChange={(e) => onPriceChange(service.id, parseFloat(e.target.value) || 0)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Textarea
                    value={selectedService?.notes || ''}
                    onChange={(e) => onNoteChange(service.id, e.target.value)}
                    placeholder="Optional notes..."
                    className="min-h-[60px] text-sm"
                    disabled={!isSelected}
                  />
                </TableCell>
                <TableCell className="text-right space-x-2">
                  {!isSelected ? (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => onToggle(service.id)}
                      className="w-full"
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      Add
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => onRemove(service.id)}
                      className="w-full text-destructive hover:text-destructive"
                    >
                      <Trash className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
