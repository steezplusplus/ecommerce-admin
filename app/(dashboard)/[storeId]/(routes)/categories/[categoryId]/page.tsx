import { prisma } from '@/lib/db';
import { CategoryForm } from './components/category-form';

type BillboardPageProps = {
  params: {
    storeId: string;
    categoryId: string;
  };
};

export default async function CategoryPage(props: BillboardPageProps) {
  const { params } = props;

  const category = await prisma.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 px-8 py-6'>
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
}
