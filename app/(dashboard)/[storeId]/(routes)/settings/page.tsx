import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/lib/db";
import { SettingsForm } from "./components/settings-form";

type SettingsPageProps = {
  params: {
    storeId: string
  },
};

export default async function SettingsPage(props: SettingsPageProps) {
  const { params } = props;
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
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 pb-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}