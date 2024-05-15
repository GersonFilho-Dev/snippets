"use server";

import db from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must have at least three chars",
    };
  }

  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code must have at least ten chars",
    };
  }

  //create a new record in the database
  //TODO: implement the api call to the backend and save the snippet via api
  const snippetToBeCreated = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath("/");

  redirect("/");
}
