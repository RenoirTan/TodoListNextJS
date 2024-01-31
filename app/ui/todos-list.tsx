import { countTodos, getRecentTodos, todosTotalPages } from "@/lib/todos";
import TodosListInner from "./todos-list-inner";
import TodosPaginator from "./todos-paginator";

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
  const totalTodos = await countTodos(authorId, query);
  const totalPages = await todosTotalPages(totalTodos);

  return (
    <div className="flex flex-col items-center gap-y-8 w-full">
      <TodosListInner todos={todos} />
      <TodosPaginator total={totalPages} current={page || 1} />
    </div>
  );
}