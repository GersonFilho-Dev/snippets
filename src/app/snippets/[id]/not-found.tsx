import Link from "next/link";
import React from "react";

export default function SnippetNotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-center text-bold">Sorry! Record not found</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to home page
      </Link>
    </div>
  );
}
