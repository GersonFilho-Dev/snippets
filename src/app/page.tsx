import db from "@/db";

export default async function Home() {
  //TODO: implement the api call to fetch all the snippets

  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return (
    <main className="flex justify-center items-center bg-slate-100 w-3/4 h-3/4 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="mr-2">Snippets</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </div>
    </main>
  );
}
