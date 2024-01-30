import Link from "next/link";
import { register as registerUrl } from "@/lib/urls";
import { Button } from "@nextui-org/react";

export default async function Home() {
  return (
    <main className="flex place-content-center h-screen">
      <div className="mx-auto flex flex-col justify-center">
        <div className="mb-6">
          <h1 className="text-center text-5xl font-extrabold tracking-wide mb-3">Todos</h1>
          <p className="text-center text-silver/75">Store reminders and tasks on any device.</p>
        </div>
        <div className="flex justify-center">
          <Link href={registerUrl()}>
            <Button
              radius="full"
              className="animate-subtle-pulse bg-gradient-to-tr from-violet to-cyan p-6"
            >
              <p className="text-center text-xl font-bold text-white">Register</p>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
