"use client";

import { formCreateTodo } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateTodo, initialState);

  return (
    <>
      {(state.message) ? <p>{state.message}</p> : <p>Ok</p>}
      <form action={dispatch} className="flex flex-col">
        {/* TODO: Remove the text-black and stuff later */}
        <input name="title" type="text" className="text-black" />
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <textarea name="description" className="text-black"></textarea>
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <input name="complete" type="checkbox" />
        {state.errors?.complete &&
          state.errors.complete.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <button type="submit">Create Todo Item</button>
      </form>
    </>
  );
}