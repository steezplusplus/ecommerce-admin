import { BillboardClient } from "./components/BillboardClient";

type BillboardsPageProps = {}

export default function BillboardsPage(props: BillboardsPageProps) {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 py-6">
        <BillboardClient />
      </div>
    </div>
  );
}