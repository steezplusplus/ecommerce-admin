import { format } from "date-fns";

import { prisma } from "@/lib/db";
import type { BillboardColumn } from "./components/columns";
import { BillboardClient } from "./components/billboard-client";

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

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient billboards={formattedBillboards} />
      </div>
    </div>
  );
}