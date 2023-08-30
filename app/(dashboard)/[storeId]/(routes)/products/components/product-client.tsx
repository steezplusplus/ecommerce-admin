'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { ProductColumn, columns } from './columns';
import { DataTable } from '@/components/ui/dataTable';
import { CopyPastaList } from '@/components/ui/copy-pasta-list';

type ProductsClientProps = {
  products: ProductColumn[];
};

// TODO use Link for navigation not button
export function ProductClient(props: ProductsClientProps) {
  const { products } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${products.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={products} searchKey="name" />
      <Heading title="API" description="API's for products" />
      <CopyPastaList entityName="products" entityIdName="productId" />
    </>
  );
}
