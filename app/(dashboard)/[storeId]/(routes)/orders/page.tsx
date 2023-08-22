import { format } from 'date-fns';

import { prisma } from '@/lib/db';
import type { OrderColumn } from './components/columns';
import { OrderClient } from './components/order-client';
import { priceFormatter } from '@/lib/utils';

type OrdersPageProps = {
  params: {
    storeId: string;
  };
};

export default async function OrdersPage(props: OrdersPageProps) {
  const { params } = props;

  const orders = await prisma.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    products: order.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(' '),
    totalPrice: priceFormatter().format(
      order.orderItems.reduce((total, orderItem) => {
        return total + Number(orderItem.product.price);
      }, 0)
    ),
    isPaid: order.isPaid,
    createdAt: format(order.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <OrderClient orders={formattedOrders} />
      </div>
    </div>
  );
}
