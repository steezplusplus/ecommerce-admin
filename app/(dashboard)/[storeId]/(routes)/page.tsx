import { prisma } from "@/lib/db";

type DashboardPageProps = {
  params: {
    storeId: string
  }
}

export default async function DashboardPage(props: DashboardPageProps) {
  const { params } = props;

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <p>Active Dashboard: {store?.name}</p>
  );
}