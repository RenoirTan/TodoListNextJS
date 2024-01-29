import { getRecentTodos } from "@/lib/actions";
import TodosListInner from "./todos-list-inner";

export default async function TodosList({
  page,
  query,
  authorId
}: {
  page: number;
  query: string;
  authorId: string;
}) {
  const todos = await getRecentTodos(authorId);

  return <TodosListInner todos={todos} />;
}