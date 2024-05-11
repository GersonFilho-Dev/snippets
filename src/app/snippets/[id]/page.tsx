import db from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";

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
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded bg-orange-200 border-orange-400 w-36 text-center"
          >
            Edit
          </Link>
          <button className="p-2 border rounded bg-blue-200 border-blue-400 w-36">
            Delete
          </button>
        </div>
      </div>

      <pre className="p-3 border rounded bg-gray-300 border-gray-600">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
