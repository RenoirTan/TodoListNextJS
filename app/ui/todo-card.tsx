import Link from "next/link";
import { Todo } from "@prisma/client";

export default function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div>
      <Link href={`${todo.id}/edit`}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        {(todo.complete)
          ? <p>Complete</p>
          : <p>Incomplete</p>}
      </Link>
    </div>
  );
}