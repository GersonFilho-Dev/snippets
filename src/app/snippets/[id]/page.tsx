import db from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  //TODO: implement fetch record from the api

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  console.log(snippet);

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h3>{snippet.id}</h3>
      <h3>{snippet.title}</h3>
      <h3>{snippet.code}</h3>
    </div>
  );
}
