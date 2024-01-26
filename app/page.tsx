import { getRecentTodos } from "@/lib/data";

export default async function Home() {
  const todos = await getRecentTodos();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {todos.map((todo) => (
        <>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </>
      ))}
    </main>
  );
}
