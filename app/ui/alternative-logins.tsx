"use client";

import { todos as todosUrl } from "@/lib/urls";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function AlternativeLogins() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || todosUrl({});

  return (
    <div className="flex flex-col content-center px-5 mx-10 max-w-[480px]">
      <Button onClick={() => signIn("github", { callbackUrl })}>
        <span className="flex flex-row items-center text-center gap-x-3">
          <FaGithub className="h-[1.5em] w-[1.5em]" />
          Log in with GitHub
        </span>
      </Button>
    </div>
  )
}