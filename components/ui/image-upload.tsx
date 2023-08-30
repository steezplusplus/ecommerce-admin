/**
 * Allows user to upload images and view them
 */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { Trash, ImagePlus } from 'lucide-react';

import { Button } from '@/components/ui/button';

type ImageUploadProps = {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
};

export function ImageUpload(props: ImageUploadProps) {
  const { disabled, onChange, onRemove, value } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const onUpload = (results: any) => {
    onChange(results.info.secure_url);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Dont render until SSR completes, avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((imageUrl, i) => {
          return (
            <div
              key={`${imageUrl}-${i}`}
              className="relative h-48 w-48 overflow-hidden rounded-md"
            >
              <div className="absolute right-2 top-2 z-10">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => onRemove(imageUrl)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <Image
                fill
                className="rounded-md border object-cover"
                alt="image"
                src={imageUrl}
              />
            </div>
          );
        })}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="qpvhxuqw">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlus className="mr-2 h-4 w-4" />
              Upload an image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
