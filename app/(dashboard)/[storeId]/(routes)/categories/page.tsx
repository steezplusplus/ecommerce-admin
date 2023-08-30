import { format } from 'date-fns';

import { prisma } from '@/lib/db';
import { CategoryColumn } from './components/columns';
import { CategoryClient } from './components/client';

type CategoriesPageProps = {
  params: {
    storeId: string;
  };
};

export default async function CategoriesPage(props: CategoriesPageProps) {
  const { params } = props;

  const categories = await prisma.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(category.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient categories={formattedCategories} />
      </div>
    </div>
  );
}
