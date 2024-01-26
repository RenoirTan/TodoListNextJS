"use client";

import { formCreateTodo } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateTodo, initialState);

  console.log(state);

  return (
    <>
      {(state.message) ? <p>{state.message}</p> : <p>Ok</p>}
      <form action={dispatch} className="flex flex-col">
        {/* TODO: Remove the text-black and stuff later */}
        <input name="title" type="text" className="text-black" />
        {state.errors?.title?.map((msg: string) => {
          <p key={msg}>{msg}</p>
        })}
        <textarea name="description" className="text-black"></textarea>
        {state.errors?.description?.map((msg: string) => {
          <p key={msg}>{msg}</p>
        })}
        <input name="complete" type="checkbox" />
        {state.errors?.complete?.map((msg: string) => {
          <p key={msg}>{msg}</p>
        })}
        <button type="submit">Create Todo Item</button>
      </form>
    </>
  );
}