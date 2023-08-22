import { useState, useEffect } from 'react';

/**
 * To safely access the `Window` object
 */
export function useOrigin() {
  const [mounted, setMounted] = useState<boolean>(false);
  const origin = typeof window !== 'undefined' && window.location.origin;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return '';
  }

  return origin;
}
