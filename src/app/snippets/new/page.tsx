import db from "@/app/db";
import React from "react";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //this need to be a server action
    "use server";

    //check the user's inpout and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //create a new record in the database
    const snippetToBeCreated = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("Snippet created: ", snippetToBeCreated);

    //redirect to home page
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
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
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Create Snippet
        </button>
      </div>
    </form>
  );
}
