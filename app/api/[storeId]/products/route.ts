import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/db';

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const {
      name,
      price,
      categoryId,
      colorId,
      images,
      isFeatured,
      isArchived,
    } = body;

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    if (!price) {
      return new NextResponse('Price is required', { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse('Images are required', { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse('Category id is required', { status: 400 });
    }

    if (!colorId) {
      return new NextResponse('Color id is required', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    // Check that the storeId corresponds to the user
    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    // Users may only create products for stores that they own
    if (!storeByUserId) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        categoryId,
        colorId,
        isFeatured,
        isArchived,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCT_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId') || undefined;
    const colorId = searchParams.get('colorId') || undefined;
    const isFeatured = searchParams.get('isFeatured');

    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: {
        storeId: params.storeId,
        categoryId,
        colorId,
        isFeatured: isFeatured ? true : undefined,
        isArchived: false,
      },
      include: {
        images: true,
        category: true,
        color: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('[PRODUCTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
