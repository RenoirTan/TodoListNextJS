"use client";

import { Todo } from "@prisma/client";
import TodoCard from "./todo-card";

export default function TodosListInner({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  )
}