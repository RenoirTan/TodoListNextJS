"use client";

import { formCreateTodo } from "@/lib/todos";
import { useFormState } from "react-dom";
import TodoForm from "./todo-form";

export default function CreateForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateTodo, initialState);

  return (
    <TodoForm state={state} dispatch={dispatch} />
  );
}