import TodoCardSkeleton from "./todo-card-skeleton";

export default function TodosSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 w-full items-center">
      <TodoCardSkeleton />
      <p className="text-lg">:)</p>
    </div>
  );
}