import { format } from "date-fns";

import { prisma } from "@/lib/db";
import { SizeColumn } from "./components/columns";
import { SizeClient } from "./components/client";


type SizesPageProps = {
  params: {
    storeId: string;
  };
};

export default async function SizesPage(props: SizesPageProps) {
  const { params } = props;

  const sizes = await prisma.size.findMany({
    where: {
      id: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  const filteredSizes: SizeColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient sizes={filteredSizes} />
      </div>
    </div>
  );
}