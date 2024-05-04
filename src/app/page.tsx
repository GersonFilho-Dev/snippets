import db from "@/db";

export default async function Home() {
  //TODO: implement the api call to fetch all the snippets

  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
