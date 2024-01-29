import { getTodo } from "@/lib/todos";
import { notFound } from "next/navigation";
import { EditFormInner } from "./edit-form-inner";

// pass `todo` instead of id because otherwise every time the form gets submitted,
// the database would get hit (because immutability)
export default async function EditForm({
  todoId,
  authorId
}: {
  todoId: string;
  authorId: string;
}) {
  const todo = await getTodo(todoId, authorId);
  if (!todo) {
    notFound();
  }

  return <EditFormInner todo={todo} />;
}
