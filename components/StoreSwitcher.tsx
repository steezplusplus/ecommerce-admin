"use client";

import { Check, ChevronsUpDown, PlusCircle, Store as StoreIcon } from "lucide-react";
import { useState } from "react"
import { Store } from "@prisma/client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command";
import { useStoreModal } from "@/hooks/useStoreModal";
import { useParams, useRouter } from "next/navigation";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

type StoreSwitcherProps = {
  className: string;
  stores: Store[];
} & PopoverTriggerProps;

export function StoreSwitcher(props: StoreSwitcherProps) {
  const { className, stores = [] } = props;
  const [open, setOpen] = useState<boolean>(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const selectedStore = stores.find((store) => store.id === params.storeId);

  function onSelectStore(store: Store) {
    setOpen(false);
    router.push(`/${store.id}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {selectedStore?.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search a store..." />
            <CommandEmpty>No store found.</CommandEmpty>
            <CommandGroup heading="Stores">
              {stores.map((store) => {
                return (
                  <CommandItem
                    key={store.id}
                    onSelect={() => onSelectStore(store)}
                    className="text-sm"
                  >
                    <StoreIcon className="mr-2 h-4 w-4" />
                    {store.name} {/* TODO Can cause newline if name too long */}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4", selectedStore?.id === store.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover >
  );
}