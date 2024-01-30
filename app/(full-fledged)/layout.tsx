import React from "react";
import Navbar from "@/app/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <main>
      <Navbar />
      <div>
        {children}
      </div>
    </main>
  )
}