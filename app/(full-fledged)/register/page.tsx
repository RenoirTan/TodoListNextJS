import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/app/ui/register-form";
import { todos as todosUrl } from "@/lib/urls";

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