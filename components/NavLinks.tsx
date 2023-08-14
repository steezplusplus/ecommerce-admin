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
      label: 'Settings', // TODO Create settings page?
      href: `/${params.storeId}/settings`,
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn('text-sm font-medium transition-colors hover:text-primary',
              route.active ? "text-black dark:text-white" : "text-muted-foreground")}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
}