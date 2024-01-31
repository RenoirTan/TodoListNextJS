import { TodoState, deleteTodo } from "@/lib/todos";
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
    <div>
      <form action={dispatch}>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            name="title"
            defaultValue={todo?.title}
            isInvalid={!!(state.errors?.title)}
            errorMessage={state.errors?.title?.join("\n")}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
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
        <Button type="submit" color="primary" variant="shadow">Submit</Button>
      </form>
      {deleteTodoById && <form action={deleteTodoById}>
        <Button type="submit" color="danger" variant="shadow">Delete</Button>
      </form>}
    </div>
  );
}