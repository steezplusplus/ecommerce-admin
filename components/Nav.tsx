import { UserButton } from "@clerk/nextjs";

import { NavLinks } from "@/components/NavLinks";

export function Nav() {
  return (
    <div className="border-b">
      <ul className="flex h-16 items-center px-4">
        <li>
          Dashboard switcher
        </li>
        <NavLinks className="mx-6" />
        <li className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
    </div>
  );
}