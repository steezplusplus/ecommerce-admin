import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";
import { NavLinks } from "@/components/NavLinks";
import { StoreSwitcher } from "@/components/StoreSwitcher";

export async function Nav() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="flex h-16 items-center px-4 border-b">
      <StoreSwitcher stores={stores} className="" />
      <NavLinks className="mx-6" />
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}