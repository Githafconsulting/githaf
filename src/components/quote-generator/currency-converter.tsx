
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface CurrencyConverterProps {
  amount: number;
  baseCurrency?: string;
  onCurrencyConverted?: (currencyCode: string, amount: number) => void;
}

interface ExchangeRateResponse {
  success: boolean;
  base: string;
  rates: Record<string, number>;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ 
  amount, 
  baseCurrency = 'USD',
  onCurrencyConverted
}) => {
  const [targetCurrency, setTargetCurrency] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState<number>(0);
  const [rates, setRates] = useState<Record<string, number>>({});

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

  // Fetch exchange rates only when needed
  const fetchExchangeRates = async () => {
    // If we already fetched within the last minute, use cached rates
    const now = Date.now();
    if (now - lastFetchTimestamp < 60000 && Object.keys(rates).length > 0) {
      return rates;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Use the free API endpoint that doesn't require an API key
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${baseCurrency}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if the response contains the rates
      if (!data.rates) {
        throw new Error('Invalid response format from exchange rate API');
      }
      
      setRates(data.rates);
      setLastFetchTimestamp(now);
      return data.rates;
    } catch (err) {
      console.error('Error fetching exchange rates:', err);
      setError('Could not fetch rates at this time');
      toast.error('Failed to fetch currency exchange rates');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Update conversion when currency changes or amount changes
  useEffect(() => {
    if (!targetCurrency) return;
    
    const updateConversion = async () => {
      const currentRates = await fetchExchangeRates();
      
      if (!currentRates) return;
      
      const rate = currentRates[targetCurrency];
      if (!rate) {
        setError(`Exchange rate for ${targetCurrency} not found`);
        return;
      }
      
      const converted = amount * rate;
      setConvertedAmount(converted);
      
      // Call the callback if provided
      if (onCurrencyConverted) {
        onCurrencyConverted(targetCurrency, converted);
      }
      
      console.log(`Converted ${amount} ${baseCurrency} to ${converted} ${targetCurrency}`);
    };
    
    updateConversion();
  }, [amount, targetCurrency, baseCurrency, onCurrencyConverted]);

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
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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

