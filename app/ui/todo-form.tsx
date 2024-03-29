import { TodoState, deleteTodo } from "@/lib/todos";
import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/react/16/solid";
import { Button, Checkbox, Divider, Input, Textarea } from "@nextui-org/react";
import { Todo } from "@prisma/client";
import Datex from "./datex";

export default function TodoForm({
  todo,
  state,
  dispatch
}: {
  todo?: Todo;
  state: TodoState;
  dispatch: (formData: FormData) => void;
}) {
  const deleteTodoById = (todo) ? deleteTodo.bind(null, todo.id) : undefined;

  function dispatchWithPreprocessing(formData: FormData) {
    // for Checkbox '' is on and undefined is off
    const complete = typeof formData.get("complete") === "string";
    formData.set("complete", (complete) ? "on" : "");
    dispatch(formData);
  }

  return (
    <div className="flex flex-col items-center gap-y-5 w-full">
      <form action={dispatchWithPreprocessing} className="flex flex-col items-center gap-y-5 w-full">
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="title" className="text-xl font-semibold">Title</label>
          <Input
            id="title"
            name="title"
            defaultValue={todo?.title}
            isInvalid={!!(state.errors?.title)}
            errorMessage={state.errors?.title?.join("\n")}
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="description" className="text-xl font-semibold">Description</label>
          <Textarea
            id="description"
            name="description"
            defaultValue={todo?.description}
            isInvalid={!!(state.errors?.description)}
            errorMessage={state.errors?.description?.join("\n")}
          />
        </div>
        <div>
          <Checkbox
            id="complete"
            name="complete"
            defaultSelected={todo?.complete}
          >
            Complete
          </Checkbox>
          {state.errors?.complete && <p className="text-red text-xs text-center whitespace-pre-wrap">
            {state.errors?.complete?.join("\n")}
          </p>}
        </div>
        {state.message && <p className="text-red text-center whitespace-pre-wrap">
          {state.message}
        </p>}
        {(todo) && <div className="flex flex-row gap-x-2 text-xs opacity-70">
          <p>Created on <Datex date={todo.createdAt} /></p>
          <Divider orientation="vertical" />
          <p>Last updated on <Datex date={todo.updatedAt} /></p>
        </div>}
        <Button type="submit" color="primary" className="w-full md:max-w-fit dark:shadow-lg dark:shadow-blue-800">
          <div className="flex flex-row items-center gap-2">
            <ArrowUpTrayIcon className="h-[1em] w-[1em]" />
            <p>Submit</p>
          </div>
        </Button>
      </form>
      {deleteTodoById && <form action={deleteTodoById} className="w-full flex flex-col items-center">
        <Button type="submit" color="danger" className="w-full md:max-w-fit dark:shadow-lg dark:shadow-rose-800">
          <TrashIcon className="h-[1em] w-[1em]" />
          <p>Delete</p>
        </Button>
      </form>}
    </div>
  );
}