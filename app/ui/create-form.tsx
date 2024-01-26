"use client";

import { formCreateTodo } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateTodo, initialState);

  return (
    <>
      {(state.message) ? <p>{state.message}</p> : <p>Ok</p>}
      <form action={dispatch}>
        <input name="title" type="text" />
        <textarea name="description"></textarea>
        <input name="complete" type="checkbox" />
        <button type="submit">Create Todo Item</button>
      </form>
    </>
  );
}