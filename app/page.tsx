import Link from "next/link";
import { Suspense } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import LogoutButton from "@/app/ui/logout-button";
import { auth } from "@/auth";
import { signIn } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  if (!session) signIn();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoutButton />
      <Link href="/change-password">Change Password</Link>
      <Link href="/create">Create Todo Item</Link>
      <Suspense fallback={<TodosSkeleton />}>
        <TodosList page={1} query={""} authorId={session?.user?.id || ""} />
      </Suspense>
    </main>
  );
}
