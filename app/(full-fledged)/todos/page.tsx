import { Suspense } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import { auth } from "@/auth";
import { getUser } from "@/lib/users";
import { notFound } from "next/navigation";
import TodosSearchBox from "@/app/ui/todos-search-box";
import CreateButton from "@/app/ui/create-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo List"
};

export default async function Page({
  searchParams
}: {
  searchParams: { page?: string; query?: string; }
}) {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) notFound();

  const user = await getUser(id);

  const tableKey = `${(searchParams.page) || 1} ${(searchParams.query) || ""}`;

  return (
    <div className="flex justify-center mt-8">
      <div className="flex flex-col w-4/5 md:max-w-screen-sm items-center gap-y-8">
        {/* HELLO */}
        <div className="flex flex-col text-center gap-y-2">
          {/* https://tailwindcss.com/docs/background-clip#cropping-to-text */}
          {(user?.name) ? <p className="text-xl">
            Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-french-fuchsia to-blue-violet dark:to-violet font-semibold me-0.5">{user?.name}</span>!
          </p> : <p className="text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-french-fuchsia to-blue-violet dark:to-violet font-semibold">Hello!</span>
          </p>
          }
          <h1 className="text-3xl font-bold">Here is your <span className="bg-clip-text text-transparent bg-gradient-to-tr from-french-fuchsia to-violet font-extrabold">Todo List</span></h1>
        </div>

        {/* SEARCH AND CREATE */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
          <TodosSearchBox />
          <CreateButton />
        </div>

        {/* Todo List and Paginator */}
        <div className="w-full md:w-4/5">
          <Suspense key={tableKey} fallback={<TodosSkeleton />}>
            <TodosList
              page={searchParams.page}
              query={searchParams.query}
              authorId={session?.user?.id || ""}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
