import Link from "next/link";
import { Todo } from "@prisma/client";
import { editTodo as editTodoUrl } from "@/lib/urls";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div className="w-full">
      <Link href={editTodoUrl({ id: todo.id })}>
        <div className="border rounded-2xl border-gray">
          <Card>
            <CardHeader className="justify-between">
              <h3 className="text-xl truncate">{todo.title}</h3>
              <div className="text-sm text-neutral-100 flex flex-row gap-x-2 items-center">
                {(todo.complete) ? (
                  <>
                    <p>Complete</p>
                    <CheckCircleIcon className="h-[16px] w-[16px] text-cyan" />
                  </>
                ) : (
                  <>
                    <p>Incomplete</p>
                    <XCircleIcon className="h-[16px] w-[16px] text-red" />
                  </>
                )}
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="whitespace-pre-wrap line-clamp-6">{todo.description}</p>
            </CardBody>
          </Card>
        </div>
      </Link>
    </div>
  );
}