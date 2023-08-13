"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

export default function SetupPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main>
      <h1 className="text-xl">Admin Dashboard</h1>
      <p>This is a protected route</p>
      <UserButton afterSignOutUrl="/" />
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="title" description="description">
        <p>Children</p>
      </Modal>
    </main >
  )
}
