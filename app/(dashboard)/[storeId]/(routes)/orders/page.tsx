import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

type OrdersPageProps = {
  params: {
    storeId: string;
  };
};

export default async function OrdersPage(props: OrdersPageProps) {
  const { params } = props;
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Orders (0)" description="Manage orders for your store" />
        <Separator />
        <p>Store id: {params.storeId}</p>
      </div>
    </div>
  );
}