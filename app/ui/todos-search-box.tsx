"use client";

import {
  todos as todosUrl
} from "@/lib/urls";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default function TodosSearchBox() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleSearch(queryString?: string) {
    replace(todosUrl({ query: queryString }));
  }

  const debouncedHandleSearch = useDebouncedCallback(handleSearch, 300);

  return (
    <div className="w-full">
      <Input
        id="query"
        type="text"
        variant="flat"
        placeholder="Search"
        defaultValue={searchParams?.get("query") || undefined}
        onChange={(event) => {
          debouncedHandleSearch(event.target.value);
        }}
        startContent={<MagnifyingGlassIcon className="h-[24px] w-[24px] ms-1 me-3" />}
        aria-label="Search Todo Items"
      />
    </div>
  );
}