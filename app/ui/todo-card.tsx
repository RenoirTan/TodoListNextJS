import Link from "next/link";
import { Todo } from "@prisma/client";
import { editTodo as editTodoUrl } from "@/lib/urls";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XCircleIcon
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import { useState } from "react";
import Datex from "./datex";

export default function TodoCard({ todo }: { todo: Todo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      <div className="border rounded-2xl border-silver dark:border-gray">
        <Card className="bg-[#f0f0f0] dark:bg-black">
          <CardHeader className="flex flex-col items-start gap-y-2">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-xl truncate">{todo.title}</h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 flex flex-row gap-x-2 items-center">
                {(todo.complete) ? (
                  <>
                    <p>Complete</p>
                    <CheckCircleIcon className="h-[16px] w-[16px] text-mint-green" />
                  </>
                ) : (
                  <>
                    <p>Incomplete</p>
                    <XCircleIcon className="h-[16px] w-[16px] text-red" />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-row gap-x-2 text-xs opacity-70">
              <p>Created on <Datex date={todo.createdAt}/></p>
              <Divider orientation="vertical" />
              <p>Last updated on <Datex date={todo.updatedAt} /></p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className={clsx(
              "whitespace-pre-wrap",
              expanded || "line-clamp-6"
            )}>{todo.description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="justify-between">
            <Link href={editTodoUrl({ id: todo.id })}>
              <div className="flex flex-row gap-x-2 items-center">
                <p className="underline">Edit</p>
              </div>
            </Link>
            <Expander expanded={expanded} setExpanded={setExpanded} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function Expander({
  expanded,
  setExpanded
}: {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void
}) {
  return (
    <div onClick={() => setExpanded(!expanded)} className="flex flex-row gap-x-2 items-center">
      {(expanded) ? (
        <>
          <p>Collapse</p>
          <ChevronUpIcon className="h-[20px] w-[20px]" />
        </>
      ) : (
        <>
          <p>Expand</p>
          <ChevronDownIcon className="h-[20px] w-[20px]" />
        </>
      )}
    </div>
  );
}