import Link from "next/link";
import { Todo } from "@prisma/client";
import { editTodo as editTodoUrl } from "@/lib/urls";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div>
      <Link href={editTodoUrl({ id: todo.id })}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        {(todo.complete)
          ? <p>Complete</p>
          : <p>Incomplete</p>}
      </Link>
    </div>
  );
}