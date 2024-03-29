"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <SessionProvider>
          {children}
        </SessionProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}