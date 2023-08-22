import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { prisma } from '@/lib/db';
import { Nav } from './components/nav';

type DashboardLayoutProps = {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
};

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { children, params } = props;
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect('/');
  }

  return (
    <>
      <Nav />
      <main className='p-2'>{children}</main>
    </>
  );
}
