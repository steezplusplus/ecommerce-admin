import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

type SizesPageProps = {
  params: {
    storeId: string;
  };
};

export default async function SizesPage(props: SizesPageProps) {
  const { params } = props;
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Sizes (0)" description="Manage sizes for your products" />
        <Separator />
        <p>Store id: {params.storeId}</p>
      </div>
    </div>
  );
}