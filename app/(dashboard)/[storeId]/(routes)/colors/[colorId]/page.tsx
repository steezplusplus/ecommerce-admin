import { prisma } from '@/lib/db';
import { ColorForm } from './components/color-form';

type ColorPageProps = {
  params: {
    storeId: string;
    colorId: string;
  };
};

export default async function ColorPage(props: ColorPageProps) {
  const { params } = props;

  const color = await prisma.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 py-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
}
