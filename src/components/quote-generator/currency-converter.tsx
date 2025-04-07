
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface CurrencyConverterProps {
  amount: number;
  baseCurrency?: string;
}

interface ExchangeRateResponse {
  success: boolean;
  base: string;
  rates: Record<string, number>;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ 
  amount, 
  baseCurrency = 'USD' 
}) => {
  const [targetCurrency, setTargetCurrency] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'AED', name: 'UAE Dirham' },
    { code: 'NGN', name: 'Nigerian Naira' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'CNY', name: 'Chinese Yuan' },
  ];

  useEffect(() => {
    if (!targetCurrency) return;
    
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://api.exchangerate.host/latest?base=${baseCurrency}&symbols=${targetCurrency}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        
        const data: ExchangeRateResponse = await response.json();
        
        if (!data.success) {
          throw new Error('Invalid response from exchange rate API');
        }
        
        const rate = data.rates[targetCurrency];
        if (!rate) {
          throw new Error(`Exchange rate for ${targetCurrency} not found`);
        }
        
        setConvertedAmount(amount * rate);
      } catch (err) {
        console.error('Error fetching exchange rates:', err);
        setError('Could not fetch rates at this time');
        toast.error('Failed to fetch currency exchange rates');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchExchangeRate();
  }, [amount, baseCurrency, targetCurrency]);

  const formatCurrency = (value: number, currencyCode: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleCurrencyChange = (value: string) => {
    setTargetCurrency(value);
  };

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="flex flex-col space-y-2">
        <label htmlFor="currency-select" className="text-sm font-medium">
          View in different currency
        </label>
        <Select onValueChange={handleCurrencyChange} value={targetCurrency}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((currency) => (
              <SelectItem key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading && targetCurrency && (
        <div className="mt-2 text-sm text-muted-foreground">
          Converting...
        </div>
      )}

      {error && (
        <div className="mt-2 text-sm text-destructive">
          {error}
        </div>
      )}

      {!isLoading && !error && convertedAmount !== null && targetCurrency && (
        <div className="mt-2 text-lg font-medium">
          <span className="text-sm text-muted-foreground">Converted Total</span>
          <div className="text-green-600">{formatCurrency(convertedAmount, targetCurrency)}</div>
        </div>
      )}
    </div>
  );
};

