'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { BillboardColumn, columns } from './columns';
import { DataTable } from '@/components/ui/dataTable';
import { CopyPastaList } from '@/components/ui/copy-pasta-list';

type BillboardClientProps = {
  billboards: BillboardColumn[];
};

// TODO use Link for navigation not button
export function BillboardClient(props: BillboardClientProps) {
  const { billboards } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Billboards (${billboards.length})`}
          description='Manage billboards for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className='mr-2 h-4 w-4' />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={billboards} searchKey='label' />
      <Heading title='API' description="API's for billboards" />
      <CopyPastaList entityName='billboards' entityIdName='billboardId' />
    </>
  );
}
