import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/app/ui/register-form";
import { todos as todosUrl } from "@/lib/urls";
import { Metadata } from "next";

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
      <RegisterForm />
    </main>
  );
}