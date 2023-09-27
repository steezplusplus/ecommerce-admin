import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/db';
import { NavLinks } from './nav-links';
import { StoreSwitcher } from './store-switcher';

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
    <nav className="border-b">
      <ul className="flex items-center gap-x-4 px-4 py-2">
        <li>
          <StoreSwitcher stores={stores} className="" />
        </li>
        <NavLinks />
        <li className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
    </nav>
  );
}
