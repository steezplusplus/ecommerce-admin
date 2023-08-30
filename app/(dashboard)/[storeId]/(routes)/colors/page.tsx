import { format } from 'date-fns';

import { prisma } from '@/lib/db';
import { ColorColumn } from './components/columns';
import { ColorClient } from './components/client';

type ColorsPageProps = {
  params: {
    storeId: string;
  };
};

export default async function ColorsPage(props: ColorsPageProps) {
  const { params } = props;

  const colors = await prisma.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const filteredColors: ColorColumn[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient colors={filteredColors} />
      </div>
    </div>
  );
}
