import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Todos",
    default: "Todos"
  },
  description: "Todos is a note-taking app that allows you to keep track of what you need to do with a simple and elegant UI. Jot down important items and events and you will never forget them again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        inter.className,
        "text-calm-black dark:text-white bg-gradient-to-b from-[#ffffff] to-[#eeeeee] dark:from-calm-black dark:to-black"
      )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
