import { prisma } from '@/lib/db';
import { SizeForm } from './components/size-form';

type SizePageProps = {
  params: {
    storeId: string;
    sizeId: string;
  };
};

export default async function SizePage(props: SizePageProps) {
  const { params } = props;

  const size = await prisma.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className='flex flex-col'>
      <div className='flex-1 space-y-4 px-8 py-6'>
        <SizeForm initialData={size} />
      </div>
    </div>
  );
}
