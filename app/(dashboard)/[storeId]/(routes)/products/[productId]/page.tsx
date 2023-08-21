/**
 * Searches for a billboard based on route params. 
 * If billboard is found, the user can update or delete it.
 * If not, the user can create a new new billboard.
 */

import { prisma } from "@/lib/db";
import { ProductForm } from "./components/product-form";

type ProductPageProps = {
  params: {
    storeId: string;
    productId: string
  },
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prisma.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prisma.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prisma.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-8 py-6">
        <ProductForm initialData={product} categories={categories} sizes={sizes} colors={colors} />
      </div>
    </div>
  );
}