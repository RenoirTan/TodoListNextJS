import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/app/ui/register-form";
import { todos as todosUrl } from "@/lib/urls";
import { Metadata } from "next";
import { Divider } from "@nextui-org/react";
import AlternativeLogins from "@/app/ui/alternative-logins";

export const metadata: Metadata = {
  title: "Create New Account"
}

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect(todosUrl({}));
  }

  return (
    <main className="w-screen flex justify-center">
      <div className="flex flex-col content-center gap-y-4">
        <RegisterForm></RegisterForm>
        <Divider />
        <AlternativeLogins />
      </div>
    </main>
  );
}