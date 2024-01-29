import { getUser } from "@/lib/auth";
import { notFound } from "next/navigation";
import ChangeNameFormInner from "./change-name-form-inner";

export default async function ChangeNameForm({ userId }: { userId: string }) {
  const user = await getUser(userId);
  if (!user) {
    notFound();
  }

  return <ChangeNameFormInner userName={user.name} />
}