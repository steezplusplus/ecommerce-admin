"use client";

import { useEffect } from "react";

import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/useStoreModal";

export default function SetupPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main>
      <h1 className="text-xl">Admin Dashboard</h1>
      <p>This is a protected route</p>
      <UserButton afterSignOutUrl="/" />
    </main >
  )
}
