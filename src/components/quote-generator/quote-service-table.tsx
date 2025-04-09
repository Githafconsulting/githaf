
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash, FileText, Save } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { SelectedService } from './types';
import { toast } from 'sonner';

interface QuoteServiceTableProps {
  services: SelectedService[];
  selectedServices: SelectedService[];
  onToggle: (id: string) => void;
  onPriceChange: (id: string, price: number) => void;
  onNoteChange: (id: string, note: string) => void;
  onRemove: (id: string) => void;
}

export const QuoteServiceTable: React.FC<QuoteServiceTableProps> = ({
  services,
  selectedServices,
  onToggle,
  onPriceChange,
  onNoteChange,
  onRemove,
}) => {
  const [openDialogId, setOpenDialogId] = React.useState<string | null>(null);
  const [tempNote, setTempNote] = React.useState<string>('');

  const handleOpenDialog = (service: SelectedService) => {
    setOpenDialogId(service.id);
    setTempNote(service.notes || '');
  };

  const handleSaveNote = (id: string) => {
    onNoteChange(id, tempNote);
    toast.success("Notes saved successfully");
  };

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Select</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[120px]">Price ($)</TableHead>
            <TableHead className="w-[80px]">Notes</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => {
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
                    disabled={!isSelected}
                  />
                </TableCell>
                <TableCell>
                  <Dialog open={openDialogId === service.id} onOpenChange={(open) => !open && setOpenDialogId(null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        disabled={!isSelected}
                        className={`${selectedService?.notes ? 'text-primary' : 'text-muted-foreground'}`}
                        onClick={() => handleOpenDialog(service)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add Notes for {service.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {selectedService?.notes && (
                          <div className="p-3 bg-muted rounded-md text-sm">
                            <p className="font-medium mb-1">Current notes:</p>
                            <p className="whitespace-pre-wrap">{selectedService.notes}</p>
                          </div>
                        )}
                        <Textarea
                          value={tempNote}
                          onChange={(e) => setTempNote(e.target.value)}
                          placeholder="Enter your notes here..."
                          className="min-h-[150px]"
                        />
                        <Button 
                          onClick={() => handleSaveNote(service.id)}
                          className="w-full"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          Save Notes
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-right">
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
