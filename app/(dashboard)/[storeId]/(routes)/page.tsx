import { prisma } from '@/lib/db';

type DashboardPageProps = {
  params: {
    storeId: string;
  };
};

export default async function DashboardPage(props: DashboardPageProps) {
  const { params } = props;

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  const billboards = await prisma.billboard.findMany({
    where: { storeId: params.storeId },
  });

  const categories = await prisma.category.findMany({
    where: { storeId: params.storeId },
  });

  const colors = await prisma.color.findMany({
    where: { storeId: params.storeId },
  });

  const products = await prisma.product.findMany({
    where: { storeId: params.storeId },
  });

  if (!store) {
    return <></>;
  }

  const { name, createdAt, updatedAt } = store;

  const createdDate = new Date(createdAt);
  const updatedDate = new Date(updatedAt);

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold tracking-tight">
        Active Dashboard: {name}
      </h2>
      <div className="mb-3 space-y-2">
        <p className="text-xl tracking-tight">{`Billboards (${billboards.length})`}</p>
        <p className="text-xl tracking-tight">{`Categories (${categories.length})`}</p>
        <p className="text-xl tracking-tight">{`Colors (${colors.length})`}</p>
        <p className="text-xl tracking-tight">{`Products (${products.length})`}</p>
        <p className="text-lg tracking-tight">
          Created on {createdDate.toDateString()}
        </p>
        <p className="text-lg tracking-tight">
          Last updated on {updatedDate.toDateString()}
        </p>
      </div>
    </div>
  );
}
