import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures new routes open at the top. Keeps hash navigation behavior intact.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Scroll to top on pathname change (no hash)
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  // Smoothly scroll to element when hash exists
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return null;
};

export default ScrollToTop;

