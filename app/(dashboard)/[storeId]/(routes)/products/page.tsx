import { format } from "date-fns";

import { prisma } from "@/lib/db";
import type { ProductColumn } from "./components/columns"
import { ProductClient } from "./components/product-client";
import { priceFormatter } from "@/lib/utils";

type ProductsPageProps = {
  params: {
    storeId: string;
  }
}

export default async function ProductsPage(props: ProductsPageProps) {
  const { params } = props;

  const products = await prisma.product.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  const formattedProducts: ProductColumn[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    isFeatured: product.isFeatured,
    isArchived: product.isArchived,
    price: priceFormatter().format(product.price.toNumber()),
    category: product.category.name,
    size: product.size.name,
    color: product.color.value,
    createdAt: format(product.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient products={formattedProducts} />
      </div>
    </div>
  );
}