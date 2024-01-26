"use client";

import { Todo } from "@prisma/client";
import { deleteTodo, formEditTodo } from "@/lib/actions";
import { useFormState } from "react-dom";

// pass `todo` instead of id because otherwise every time the form gets submitted,
// the database would get hit (because immutability)
export default function EditForm({ todo }: { todo: Todo }) {
  const initialState = { message: "", errors: {} };
  const formEditTodoById = formEditTodo.bind(null, todo.id);
  const [state, dispatch] = useFormState(formEditTodoById, initialState);
  const deleteTodoById = deleteTodo.bind(null, todo.id);

  return (
    <>
      {(state.message) ? <p>{state.message}</p> : <p>Ok</p>}
      <form action={dispatch} className="flex flex-col">
        {/* TODO: Remove the text-black and stuff later */}
        <input
          name="title"
          type="text"
          className="text-black"
          defaultValue={todo.title}
        />
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <textarea
          name="description"
          className="text-black"
          defaultValue={todo.description}
        ></textarea>
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <input
          name="complete"
          type="checkbox"
          defaultChecked={todo.complete}
        />
        {state.errors?.complete &&
          state.errors.complete.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        }
        <button type="submit">Edit Todo Item</button>
      </form>
      <form action={deleteTodoById}>
        <button type="submit">Delete Todo Item</button>
      </form>
    </>
  );
}