import Link from "next/link";
import { Suspense } from "react";
import TodosSkeleton from "@/app/ui/skeletons/todos-skeleton";
import TodosList from "@/app/ui/todos-list";
import { auth } from "@/auth";
import { getUser } from "@/lib/users";
import { notFound } from "next/navigation";
import {
  createTodo as createTodoUrl
} from "@/lib/urls";
import { Button, Input } from "@nextui-org/react";
import { DocumentPlusIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default async function Page() {
  const session = await auth();
  const id = session?.user?.id;
  if (!id) notFound();

  const user = await getUser(id);

  return (
    <div className="flex justify-center mt-8"> {/* TODO: Remove mt-24 */}
      <div className="flex flex-col w-4/5 md:max-w-screen-sm items-center gap-y-8">
        <div className="flex flex-col text-center gap-y-2">
          {/* https://tailwindcss.com/docs/background-clip#cropping-to-text */}
          <p className="text-xl">Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-french-fuchsia to-violet font-semibold me-0.5">{user?.name}</span>!</p>
          <h1 className="text-3xl font-bold">Here is your <span className="bg-clip-text text-transparent bg-gradient-to-tr from-french-fuchsia to-violet font-extrabold">Todo List</span></h1>
        </div>
        {/*
        <Link href={changePasswordUrl()}>Change Password</Link>
        <Link href={changeNameUrl()}>Change Name</Link>
        */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-stretch">
          <Input
            type="text"
            variant="flat"
            placeholder="Search"
            aria-label="Search Todo Items"
          />
          <div className="flex flex-row gap-4 justify-center">
            <Button type="button" className="h-full bg-gradient-to-tr from-mint-green to-cyan text-dark-gray py-4">
              <div className="flex flex-row gap-2 items-center h-full">
                <MagnifyingGlassIcon className="h-[24px] w-[24px] md:h-[18px] md:w-[18px]" />
                <p className="hidden md:block text-lg">Search</p>
              </div>
            </Button>
            <Link href={createTodoUrl()}>
              <Button type="button" className="h-full bg-gradient-to-tr from-vermillion to-lilac text-dark-gray py-4">
                <div className="flex flex-row gap-2 items-center h-full">
                  <DocumentPlusIcon className="h-[24px] w-[24px] md:h-[18px] md:w-[18px]" />
                  <p className="hidden md:block text-lg">Create</p>
                </div>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-4/5">
          <Suspense fallback={<TodosSkeleton />}>
            <TodosList page={1} query={""} authorId={session?.user?.id || ""} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
