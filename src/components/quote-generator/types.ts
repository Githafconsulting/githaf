
export interface Service {
  id: string;
  name: string;
  description: string;
  defaultPrice: number;
  type: 'service' | 'agent';
}

export interface SelectedService extends Service {
  selected: boolean;
  price: number;
  notes: string;
}

export interface AdditionalFee {
  id: string;
  name: string;
  price: number;
}

export interface Discount {
  type: 'percentage' | 'amount';
  value: number;
}

export interface Totals {
  subtotal: number;
  feesTotal: number;
  discountAmount: number;
  finalTotal: number;
}

export interface ConvertedCurrency {
  code: string;
  amount: number;
}
