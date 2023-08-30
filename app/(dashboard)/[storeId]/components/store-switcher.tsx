'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown, PlusCircle, Store } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useParams, useRouter } from 'next/navigation';

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type Store = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

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
    router.push(`/${store.id}`);
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
          className={cn('w-[200px] justify-between', className)}
        >
          <Store className="mr-2 h-4 w-4" />
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
                    <Store className="mr-2 h-4 w-4" />
                    {store.name} {/* TODO Can cause newline if name too long */}
                    <Check
                      className={cn(
                        'ml-auto h-4 w-4',
                        selectedStore?.id === store.id
                          ? 'opacity-100'
                          : 'opacity-0'
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
    </Popover>
  );
}
