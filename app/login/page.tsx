import LoginForm from "@/app/ui/login-form";
import { auth } from "@/auth";
import { todos as todosUrl } from "@/lib/urls";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect(todosUrl({}));
  }
  
  return (
    <main>
      <LoginForm></LoginForm>
    </main>
  );
}