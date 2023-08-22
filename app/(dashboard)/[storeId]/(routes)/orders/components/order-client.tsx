"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/dataTable";

import { OrderColumn, columns } from "./columns";

type OrderClientProps = {
  orders: OrderColumn[];
}

export function OrderClient(props: OrderClientProps) {
  const { orders } = props;

  return (
    <>
      <Heading title={`Orders (${orders.length})`} description="Manage orders for your store" />
      <Separator />
      <DataTable columns={columns} data={orders} searchKey="products" />
    </>
  );
} 