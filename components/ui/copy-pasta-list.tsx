"use client";

import { useParams } from "next/navigation";
import { useOrigin } from "@/hooks/useOrigin";
import { CopyPasta } from "@/components/ui/copy-pasta";

type CopyPastaListProps = {
  entityName: string;
  entityIdName: string;
}

export function CopyPastaList(props: CopyPastaListProps) {
  const { entityName, entityIdName } = props;
  const params = useParams();
  const origin = useOrigin();
  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <div className="flex flex-col gap-y-2">
      <CopyPasta
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <CopyPasta
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <CopyPasta
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <CopyPasta
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <CopyPasta
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </div>
  );
}