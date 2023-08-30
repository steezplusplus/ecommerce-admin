'use client';

import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modal';

export default function SetupPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" />
  );
}
