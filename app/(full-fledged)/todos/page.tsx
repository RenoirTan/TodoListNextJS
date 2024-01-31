import Link from "next/link";
import { Suspense, useState } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import { auth } from "@/auth";
import { getUser } from "@/lib/users";
import { notFound } from "next/navigation";
import { createTodo as createTodoUrl } from "@/lib/urls";
import { Button } from "@nextui-org/react";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";
import TodosSearchBox from "@/app/ui/todos-search-box";

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
    <div className="flex justify-center mt-8"> {/* TODO: Remove mt-24 */}
      <div className="flex flex-col w-4/5 md:max-w-screen-sm items-center gap-y-8">
        {/* HELLO */}
        <div className="flex flex-col text-center gap-y-2">
          {/* https://tailwindcss.com/docs/background-clip#cropping-to-text */}
          <p className="text-xl">Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-french-fuchsia to-violet font-semibold me-0.5">{user?.name}</span>!</p>
          <h1 className="text-3xl font-bold">Here is your <span className="bg-clip-text text-transparent bg-gradient-to-tr from-french-fuchsia to-violet font-extrabold">Todo List</span></h1>
        </div>

        {/* SEARCH AND CREATE */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
          <TodosSearchBox />
          <Link href={createTodoUrl()}>
            <Button type="button" className="h-full bg-gradient-to-tr from-mint-green to-cyan text-dark-gray py-4">
              <div className="flex flex-row gap-2 items-center h-full">
                <DocumentPlusIcon className="h-[18px] w-[18px]" />
                <p className="block text-lg">Create</p>
              </div>
            </Button>
          </Link>
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
