'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useParams, useRouter } from 'next/navigation';
import { ColorColumn, columns } from './columns';
import { DataTable } from '@/components/ui/dataTable';
import { CopyPastaList } from '@/components/ui/copy-pasta-list';

type ColorClientProps = {
  colors: ColorColumn[];
};

// TODO use Link for navigation not button
export function ColorClient(props: ColorClientProps) {
  const { colors } = props;
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Clients (${colors.length})`}
          description='Manage colors for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={colors} searchKey='name' />
      <Heading title='API' description="API's for colors" />
      <Separator />
      <CopyPastaList entityName='color' entityIdName='color' />
    </>
  );
}
