"use client";

import { todos as todosUrl } from "@/lib/urls";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function TodosPaginator({
  current,
  total,
  query
}: {
  current: number;
  total: number;
  query?: string;
}) {
  const { replace } = useRouter();

  function handlePageChange(page: number) {
    replace(todosUrl({ query, page }));
  }

  return <Pagination
    className="max-w-full"
    showControls
    total={total}
    initialPage={current}
    onChange={handlePageChange}
  />;
}