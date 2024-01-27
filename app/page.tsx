import { getRecentTodos } from "@/lib/actions";
import Link from "next/link";
import { Suspense } from "react";
import TodosSkeleton from "./ui/skeletons/todos-skeleton";
import TodosList from "./ui/todos-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/create">Create Todo Item</Link>
      <Suspense fallback={<TodosSkeleton />}>
        <TodosList page={1} query={""} />
      </Suspense>
    </main>
  );
}
