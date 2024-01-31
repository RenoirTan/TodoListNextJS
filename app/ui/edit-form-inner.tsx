"use client";

import { Todo } from "@prisma/client";
import { formEditTodo } from "@/lib/todos";
import { useFormState } from "react-dom";
import TodoForm from "./todo-form";

export async function EditFormInner({ todo }: { todo: Todo }) {
  const initialState = { message: "", errors: {} };
  const formEditTodoById = formEditTodo.bind(null, todo.id);
  const [state, dispatch] = useFormState(formEditTodoById, initialState);

  return (
    <TodoForm todo={todo} state={state} dispatch={dispatch} />
  );
}