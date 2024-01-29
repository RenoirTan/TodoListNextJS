"use client";

import { Todo } from "@prisma/client";
import TodoCard from "./todo-card";

export default async function TodosListInner({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
    </div>
  )
}