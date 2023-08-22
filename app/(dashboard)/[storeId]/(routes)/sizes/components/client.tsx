'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { SizeColumn, columns } from './columns';
import { DataTable } from '@/components/ui/dataTable';
import { CopyPastaList } from '@/components/ui/copy-pasta-list';

type SizeClientProps = {
  sizes: SizeColumn[];
};

// TODO use Link for navigation not button
export function SizeClient(props: SizeClientProps) {
  const { sizes } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Sizes (${sizes.length})`}
          description='Manage sizes for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={sizes} searchKey='name' />
      <Heading title='API' description="API's for sizes" />
      <Separator />
      <CopyPastaList entityName='sizes' entityIdName='sizeId' />
    </>
  );
}
