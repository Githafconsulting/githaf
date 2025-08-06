import { useState, useEffect } from 'react';

interface UseExitIntentOptions {
  enabled?: boolean;
  delay?: number;
  threshold?: number;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    enabled = true,
    delay = 1000, // Minimum time on page before showing exit intent
    threshold = 10 // Mouse position threshold from top
  } = options;

  const [shouldShow, setShouldShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!enabled || hasShown) return;

    let timeoutId: NodeJS.Timeout;
    let isDelayPassed = false;

    // Set delay before exit intent can be triggered
    const delayTimeout = setTimeout(() => {
      isDelayPassed = true;
    }, delay);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!isDelayPassed || hasShown) return;
      
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= threshold && e.relatedTarget === null) {
        setShouldShow(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = () => {
      if (!isDelayPassed || hasShown) return;
      setShouldShow(true);
      setHasShown(true);
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(delayTimeout);
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, delay, threshold, hasShown]);

  const reset = () => {
    setShouldShow(false);
    setHasShown(false);
  };

  const dismiss = () => {
    setShouldShow(false);
  };

  return {
    shouldShow,
    hasShown,
    reset,
    dismiss
  };
};