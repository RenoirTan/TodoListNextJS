import LoginForm from "@/app/ui/login-form";
import { auth } from "@/auth";
import { todos as todosUrl } from "@/lib/urls";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login"
};

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect(todosUrl({}));
  }
  
  return (
    <main className="w-screen flex justify-center">
      <LoginForm></LoginForm>
    </main>
  );
}