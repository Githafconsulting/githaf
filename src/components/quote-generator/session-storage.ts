
/**
 * Session storage utility for the quote generator
 * Enables data persistence between page navigations
 */

// Keys for the different data types
const STORAGE_KEYS = {
  SELECTED_SERVICES: 'quote_selected_services',
  ADDITIONAL_FEES: 'quote_additional_fees',
  DISCOUNT: 'quote_discount',
} as const;

// Save data to session storage
export const saveToSession = <T>(key: string, data: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to session storage: ${error}`);
  }
};

// Load data from session storage
export const loadFromSession = <T>(key: string, fallback: T): T => {
  try {
    const storedData = sessionStorage.getItem(key);
    return storedData ? JSON.parse(storedData) as T : fallback;
  } catch (error) {
    console.error(`Error loading from session storage: ${error}`);
    return fallback;
  }
};

// Clear all quote generator data from session storage
export const clearQuoteSession = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    sessionStorage.removeItem(key);
  });
};

// Export the keys for use in other components
export { STORAGE_KEYS };
