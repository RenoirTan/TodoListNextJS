import React from "react";
import Navbar from "@/app/ui/navbar";
import { auth } from "@/auth";

export default async function Layout({ children }: { children: React.ReactNode; }) {
  const session = await auth();
  const loggedIn = !!(session?.user);

  return (
    <main>
      <Navbar loggedIn={loggedIn} />
      <div className="pb-8">
        {children}
      </div>
    </main>
  )
}