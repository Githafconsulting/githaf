
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ConfirmationDialogProps } from './types';

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  setOpen,
  formData,
  selectedDate,
  selectedTime,
  selectedType,
  onConfirm,
  isSubmitting,
  consultationTypes
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Your Booking</DialogTitle>
          <DialogDescription>
            Please review your booking details before confirming.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Date:</div>
            <div>{selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''}</div>
            
            <div className="font-medium">Time:</div>
            <div>{selectedTime}</div>
            
            <div className="font-medium">Type:</div>
            <div>{consultationTypes.find(type => type.id === selectedType)?.name}</div>
            
            <div className="font-medium">Name:</div>
            <div>{formData.name}</div>
            
            <div className="font-medium">Email:</div>
            <div>{formData.email}</div>
            
            {formData.company && (
              <>
                <div className="font-medium">Company:</div>
                <div>{formData.company}</div>
              </>
            )}
            
            {formData.phone && (
              <>
                <div className="font-medium">Phone:</div>
                <div>{formData.phone}</div>
              </>
            )}
          </div>
          
          {formData.message && (
            <div className="text-sm">
              <div className="font-medium mb-1">Additional Information:</div>
              <div className="bg-muted p-2 rounded">{formData.message}</div>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Edit Details
          </Button>
          <Button onClick={onConfirm} disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
