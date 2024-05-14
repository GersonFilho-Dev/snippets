"use client";
import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        id="form"
        action={action}
        className="container max-w-[768px] flex flex-col"
      >
        <h3 className="font-bold m-3 text-center">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded p-2 w-full"
              type="text"
              id="title"
              name="title"
            />
          </div>

          <div className="flex gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <input
              className="border rounded p-2 w-full"
              type="text"
              id="code"
              name="code"
            />
          </div>

          {formState.message && (
            <div className="bg-red-200 border-red-600 border text-red-600 p-2 rounded">
              {formState.message}
            </div>
          )}

          <button className="bg-blue-500 text-white p-2 rounded" type="submit">
            Create Snippet
          </button>
        </div>
      </form>
    </div>
  );
}
