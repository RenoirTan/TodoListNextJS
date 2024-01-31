import Link from "next/link";
import { Button } from "@nextui-org/react";
import { createTodo as createTodoUrl } from "@/lib/urls";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";
import { clsx } from "clsx";

export default function CreateButton({ small }: { small?: boolean }) {
  return <Link href={createTodoUrl()}>
    <Button type="button" className={clsx(
      "h-full bg-gradient-to-tr from-mint-green to-cyan text-dark-gray",
      (small) ? "py-1" : "py-4"
    )}>
      <div className="flex flex-row gap-2 items-center h-full">
        <DocumentPlusIcon className="h-[18px] w-[18px]" />
        <p className={clsx("block", small ? "text-md" : "text-lg")}>Create</p>
      </div>
    </Button>
  </Link>;
}