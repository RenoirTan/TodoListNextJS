import { settings as settingsUrl } from "@/lib/urls";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col w-4/5 md:w-3/5">
          <Link href={settingsUrl()}>
            <Button className="flex flex-row items-center gap-x-3">
              <ArrowLeftIcon className="h-[1em] w-[1em]" />
              <p>Settings</p>
            </Button>
          </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}