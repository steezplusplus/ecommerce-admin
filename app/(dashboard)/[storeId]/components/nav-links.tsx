'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type NavLinksProps = {
  className: string;
};

export function NavLinks(props: NavLinksProps) {
  const { className } = props;
  const params = useParams();
  const pathName = usePathname();

  const routes = [
    {
      label: 'Overview',
      href: `/${params.storeId}`,
      active: pathName.startsWith(`/${params.storeId}`),
    },
    {
      label: 'Billboards',
      href: `/${params.storeId}/billboards`,
      active: pathName.startsWith(`/${params.storeId}/billboards`),
    },
    {
      label: 'Categories',
      href: `/${params.storeId}/categories`,
      active: pathName.startsWith(`/${params.storeId}/categories`),
    },
    {
      label: 'Colors',
      href: `/${params.storeId}/colors`,
      active: pathName.startsWith(`/${params.storeId}/colors`),
    },
    {
      label: 'Products',
      href: `/${params.storeId}/products`,
      active: pathName.startsWith(`/${params.storeId}/products`),
    },
    {
      label: 'Settings',
      href: `/${params.storeId}/settings`,
      active: pathName.startsWith(`/${params.storeId}/settings`),
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
