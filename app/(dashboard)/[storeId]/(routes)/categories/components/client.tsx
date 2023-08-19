"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";
import { CopyPastaList } from "@/components/ui/copy-pasta-list";

type BillboardClientProps = {
  categories: CategoryColumn[];
}

// TODO use Link for navigation not button
export function CategoryClient(props: BillboardClientProps) {
  const { categories } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Categories (${categories.length})`} description="Manage categories for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className="h-4 w-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={categories} searchKey="name" />
      <Heading title="API" description="API's for categories" />
      <CopyPastaList entityName="categories" entityIdName="categoryId" />
    </>
  );
} 