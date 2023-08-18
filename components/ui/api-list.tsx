"use client";

import { useParams } from "next/navigation";
import { useOrigin } from "@/hooks/useOrigin";
import { AlertCopyPasta } from "@/components/ui/alertCopyPasta";

type ApiListProps = {
  entityName: string;
  entityIdName: string;
}

export function ApiList(props: ApiListProps) {
  const { entityName, entityIdName } = props;
  const params = useParams();
  const origin = useOrigin();
  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <div className="flex flex-col gap-y-2">
      <AlertCopyPasta
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <AlertCopyPasta
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <AlertCopyPasta
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <AlertCopyPasta
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <AlertCopyPasta
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </div>
  );
}