import Link from "next/link";
import { Suspense } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import LogoutButton from "@/app/ui/logout-button";
import { auth } from "@/auth";
import { getUser } from "@/lib/users";
import { notFound } from "next/navigation";
import {
  changePassword as changePasswordUrl,
  changeName as changeNameUrl,
  createTodo as createTodoUrl
} from "@/lib/urls";

export default async function Page() {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) notFound();

  const user = await getUser(id);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>Hello, {user?.name}</p>
      <LogoutButton />
      <Link href={changePasswordUrl()}>Change Password</Link>
      <Link href={changeNameUrl()}>Change Name</Link>
      <Link href={createTodoUrl()}>Create Todo Item</Link>
      <Suspense fallback={<TodosSkeleton />}>
        <TodosList page={1} query={""} authorId={session?.user?.id || ""} />
      </Suspense>
    </main>
  );
}
