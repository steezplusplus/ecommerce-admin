"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/ui/modal";

export function StoreModal() {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create a store"
      description="A store is used to manage your products."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <p>Placeholder create store form</p>
    </Modal>
  );
}