"use client";

import { toast } from "react-hot-toast";
import { Server, Copy } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


type CopyPastaProps = {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<CopyPastaProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<CopyPastaProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export function CopyPasta(props: CopyPastaProps) {
  const { title, description, variant } = props;

  function handleCopy() {
    navigator.clipboard.writeText(description);
    toast.success('Copied to clipboard!');
  }

  return (
    <Alert>
      <AlertTitle className="flex items-center gap-x-2">
        <Server className="h-4 w-4" />
        {title}
        <Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-2 py-1 font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={handleCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}