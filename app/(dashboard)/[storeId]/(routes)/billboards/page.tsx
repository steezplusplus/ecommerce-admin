import { prisma } from "@/lib/db";
import { BillboardClient } from "./components/BillboardClient";

type BillboardsPageProps = {
  params: {
    storeId: string;
  }
}

export default async function BillboardsPage(props: BillboardsPageProps) {
  const { params } = props;

  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 py-6">
        <BillboardClient billboards={billboards} />
      </div>
    </div>
  );
}