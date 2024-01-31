import { countTodos, getRecentTodos, todosTotalPages } from "@/lib/todos";
import TodosListInner from "./todos-list-inner";
import TodosPaginator from "./todos-paginator";

export default async function TodosList({
  page,
  query,
  authorId
}: {
  page?: string;
  query?: string;
  authorId: string;
}) {
  const pageNumber = (page) ? parseInt(page) : 1;
  const todos = await getRecentTodos(authorId, pageNumber, query);
  const totalTodos = await countTodos(authorId, query);
  const totalPages = await todosTotalPages(totalTodos);

  return (
    <div className="flex flex-col items-center gap-y-8 w-full">
      <TodosListInner todos={todos} />
      <TodosPaginator total={totalPages} current={pageNumber} />
    </div>
  );
}