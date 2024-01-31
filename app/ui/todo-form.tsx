import { TodoState, deleteTodo } from "@/lib/todos";
import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/react/16/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { Todo } from "@prisma/client";

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

  return (
    <div className="flex flex-col justify-center gap-y-5">
      <form action={dispatch} className="flex flex-col justify-center gap-y-5">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="text-xl font-semibold">Title</label>
          <Input
            id="title"
            name="title"
            defaultValue={todo?.title}
            isInvalid={!!(state.errors?.title)}
            errorMessage={state.errors?.title?.join("\n")}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="description" className="text-xl font-semibold">Description</label>
          <Input
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
        <Button type="submit" color="primary" variant="shadow" className="w-full md:max-w-fit">
          <div className="flex flex-row items-center gap-2">
            <ArrowUpTrayIcon className="h-[14px] w-[14px]" />
            <p>Submit</p>
          </div>
        </Button>
      </form>
      {deleteTodoById && <form action={deleteTodoById}>
        <Button type="submit" color="danger" variant="shadow" className="w-full md:max-w-fit">
          <TrashIcon className="h-[14px] w-[14px]" />
          <p>Delete</p>
        </Button>
      </form>}
    </div>
  );
}