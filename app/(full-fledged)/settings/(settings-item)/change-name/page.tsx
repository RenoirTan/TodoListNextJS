import { auth } from "@/auth";
import ChangeNameForm from "@/app/ui/change-name-form";
import { notFound } from "next/navigation";

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    notFound();
  }

  return (
    <div className="w-screen flex justify-center">
      <ChangeNameForm userId={userId} />
    </div>
  );
}