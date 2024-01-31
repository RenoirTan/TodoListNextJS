import Link from "next/link";
import Image from "next/image";
import { register as registerUrl } from "@/lib/urls";
import { Button } from "@nextui-org/react";
import Navbar from "@/app/ui/navbar";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const loggedIn = !!(session?.user);

  return (
    <main className="h-screen flex flex-col">
      <Navbar loggedIn={loggedIn} />
      <div className="flex place-content-center h-full max-w-4/5">
        <div className="mx-auto flex flex-col items-center justify-center">

          <div className="block md:hidden">
            <Image
              className="rounded-t-3xl shadow-lg shadow-gray"
              src="/android-smushed.jpg"
              alt="Screenshot on Android"
              height={265}
              width={180}
            />
          </div>
          <div className="hidden md:block">
            <Image
              className="rounded-t-xl shadow-lg shadow-gray"
              src="/desktop.png"
              alt="Screenshot on Desktop"
              height={270}
              width={480}
            />
          </div>

          <div className="mb-6 mt-6">
            <h1 className="text-center text-5xl font-extrabold tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-t from-orchid to-cyan">Todos</h1>
            <p className="text-center text-silver/75">Store reminders and tasks on any device.</p>
          </div>
          <div className="flex justify-center">
            <Link href={registerUrl()}>
              <Button
                radius="full"
                className="animate-subtle-pulse bg-gradient-to-tr from-blue-violet to-cyan p-6"
              >
                <p className="text-center text-xl font-bold text-white">Try It Out Now!</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
