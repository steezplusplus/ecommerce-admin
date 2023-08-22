import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { prisma } from '@/lib/db';

type SetupLayoutProps = {
  children: React.ReactNode;
};

export default async function SetupLayout(props: SetupLayoutProps) {
  const { children } = props;
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prisma.store.findFirst({
    where: {
      userId,
    },
  });

  // TODO Should allow user to select a store
  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
