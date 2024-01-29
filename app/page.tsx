import { getRecentTodos } from "@/lib/actions";
import Link from "next/link";
import { Suspense } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import LogoutButton from "@/app/ui/logout-button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoutButton />
      <Link href="/change-password">Change Password</Link>
      <Link href="/create">Create Todo Item</Link>
      <Suspense fallback={<TodosSkeleton />}>
        <TodosList page={1} query={""} />
      </Suspense>
    </main>
  );
}
