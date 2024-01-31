import { countTodos, getRecentTodos, todosTotalPages } from "@/lib/todos";
import TodosListInner from "./todos-list-inner";
import TodosPaginator from "./todos-paginator";
import CreateButton from "./create-button";

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
    <>
      {(totalTodos >= 1) ? (<div className = "flex flex-col items-center gap-y-8 w-full">
        <TodosListInner todos={todos} />
        <TodosPaginator total={totalPages} current={pageNumber} />
      </div>) : (<div className="flex flex-col items-center gap-y-2">
        <h2 className="text-center text-">🤔 Can&apos;t seem to find anything.</h2>
        <div className="flex flex-row items-center">
          <h2 className="me-1">Try and </h2>
          <CreateButton small />
          <h2 className="ms-1"> a new todo item.</h2>
        </div>
      </div>)}
    </>
  );
}