"use client";

import { useEffect, useState } from 'react';

import { StoreModal } from '@/components/modals/store-modal';

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dont render until SSR completes
  if (!isMounted) {
    return null;
  }

  return (
    <StoreModal />
  );
}