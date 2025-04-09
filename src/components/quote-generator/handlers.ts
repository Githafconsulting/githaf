
import { SelectedService, AdditionalFee, Discount } from './types';

// Service handlers
export const createServiceToggleHandler = (
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedService[]>>
) => {
  return (serviceId: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: !service.selected } 
          : service
      )
    );
  };
};

export const createServicePriceChangeHandler = (
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedService[]>>
) => {
  return (serviceId: string, price: number) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, price } 
          : service
      )
    );
  };
};

export const createServiceNoteChangeHandler = (
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedService[]>>
) => {
  return (serviceId: string, notes: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, notes } 
          : service
      )
    );
  };
};

export const createRemoveServiceHandler = (
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedService[]>>
) => {
  return (serviceId: string) => {
    setSelectedServices(prev => 
      prev.map(service => 
        service.id === serviceId 
          ? { ...service, selected: false, notes: '' } 
          : service
      )
    );
  };
};

// Fee handlers
export const createAdditionalFeeChangeHandler = (
  setAdditionalFees: React.Dispatch<React.SetStateAction<AdditionalFee[]>>
) => {
  return (feeId: string, price: number) => {
    setAdditionalFees(prev => 
      prev.map(fee => 
        fee.id === feeId 
          ? { ...fee, price } 
          : fee
      )
    );
  };
};

// Discount handlers
export const createDiscountChangeHandler = (
  setDiscount: React.Dispatch<React.SetStateAction<Discount>>
) => {
  return (value: number) => {
    setDiscount(prev => ({ ...prev, value }));
  };
};

export const createDiscountTypeChangeHandler = (
  setDiscount: React.Dispatch<React.SetStateAction<Discount>>
) => {
  return (type: 'percentage' | 'amount') => {
    setDiscount(prev => ({ ...prev, type }));
  };
};
