import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterForm from "@/app/ui/register-form";

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <main>
      <RegisterForm />
    </main>
  );
}