"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLinksProps = {
  className: string,
};

export function NavLinks(props: NavLinksProps) {
  const { className } = props;
  const params = useParams();
  const pathName = usePathname();

  const routes = [
    {
      label: 'Overview',
      href: `/${params.storeId}`,
      active: pathName === `/${params.storeId}`,
    },
    {
      label: 'Billboards',
      href: `/${params.storeId}/billboards`,
      active: pathName === `/${params.storeId}/billboards`,
    },
    {
      label: 'Settings',
      href: `/${params.storeId}/settings`,
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <>
      {routes.map((route) => {
        return (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn('text-sm font-medium transition-colors hover:text-primary',
                route.active ? "text-black dark:text-white" : "text-muted-foreground")}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}