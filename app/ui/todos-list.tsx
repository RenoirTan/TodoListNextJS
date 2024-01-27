import { getRecentTodos } from "@/lib/actions";
import TodosListInner from "./todos-list-inner";

export default async function TodosList({
  page,
  query
}: {
  page: number;
  query: string;
}) {
  const todos = await getRecentTodos();

  return <TodosListInner todos={todos} />;
}