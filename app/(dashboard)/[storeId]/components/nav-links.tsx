'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function NavLinks() {
  const params = useParams();
  const pathName = usePathname();

  const { storeId } = params;

  const routes = [
    {
      label: 'Overview',
      href: `/${storeId}`,
      active: pathName.endsWith(`/${storeId}`),
    },
    {
      label: 'Billboards',
      href: `/${storeId}/billboards`,
      active: pathName.startsWith(`/${storeId}/billboards`),
    },
    {
      label: 'Categories',
      href: `/${storeId}/categories`,
      active: pathName.startsWith(`/${storeId}/categories`),
    },
    {
      label: 'Colors',
      href: `/${storeId}/colors`,
      active: pathName.startsWith(`/${storeId}/colors`),
    },
    {
      label: 'Products',
      href: `/${storeId}/products`,
      active: pathName.startsWith(`/${storeId}/products`),
    },
    {
      label: 'Settings',
      href: `/${storeId}/settings`,
      active: pathName.startsWith(`/${storeId}/settings`),
    },
  ];

  return (
    <>
      {routes.map((route) => {
        return (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                route.active ? 'text-black underline' : 'text-gray-700'
              )}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
