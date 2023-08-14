import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

type DashboardLayoutProps = {
  children: React.ReactNode;
  params: {
    storeId: string
  };
}

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
      <nav className="px-2 py-1 border-b bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <ul className="flex items-center">
          <h1 className="text-xl text-white text-">E-commerce Admin</h1>
        </ul>
      </nav>
      <main className="p-2">
        {children}
      </main>
    </>
  );
}