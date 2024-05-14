import React from "react";
import { notFound } from "next/navigation";
import db from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

interface EditSnippetProps {
  params: {
    id: string;
  };
}

export default async function EditSnippet(props: EditSnippetProps) {
  const id = parseInt(props.params.id);

  //fetch data based in the id received in the query string request
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  //if the snippet was not found, it returns a page telling that snippet was not found
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
