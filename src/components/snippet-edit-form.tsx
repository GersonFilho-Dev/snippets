"use client";
import { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  function handleEditChange(value: string = ""): void {
    setCode(value);
  }

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditChange}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="p-2 border rounded bg-orange-100 border-orange-400 w-36 mt-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
