import { getRecentTodos } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const todos = await getRecentTodos();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/create">Create Todo Item</Link>
      {todos.map((todo) => (
        <Link href={`/edit/${todo.id}`}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </Link>
      ))}
    </main>
  );
}
