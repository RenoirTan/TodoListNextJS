import { getTodo } from "@/lib/actions";
import { notFound } from "next/navigation";
import { EditFormInner } from "./edit-form-inner";

// pass `todo` instead of id because otherwise every time the form gets submitted,
// the database would get hit (because immutability)
export default async function EditForm({ todoId }: { todoId: string }) {
  const todo = await getTodo(todoId);
  if (!todo) {
    notFound();
  }

  return <EditFormInner todo={todo} />;
}
