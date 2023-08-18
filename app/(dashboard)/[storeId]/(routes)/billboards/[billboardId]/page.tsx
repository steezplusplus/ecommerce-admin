/**
 * Searches for a billboard based on route params. 
 * If billboard is found, the user can update or delete it.
 * If not, the user can create a new new billboard.
 */

import { prisma } from "@/lib/db";
import { BillboardForm } from "./components/BillboardForm";

type BillboardPageProps = {
  params: {
    storeId: string;
    billboardId: string
  },
};

export default async function BillboardPage(props: BillboardPageProps) {
  const { params } = props;

  const billboard = await prisma.billboard.findUnique({
    where: {
      id: params.billboardId,
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 py-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}