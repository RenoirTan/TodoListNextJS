import { getRecentTodos } from "@/lib/todos";
import TodosListInner from "./todos-list-inner";

export default async function TodosList({
  page,
  query,
  authorId
}: {
  page?: number;
  query?: string;
  authorId: string;
}) {
  const todos = await getRecentTodos(authorId, page, query);

  return <TodosListInner todos={todos} />;
}