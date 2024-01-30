import { signOut } from "@/auth";
import { index as indexUrl } from "@/lib/urls";

export default function LogoutButton() {
  async function goodbye() {
    "use server";
    await signOut({redirect: true, redirectTo: indexUrl()});
  }

  return (
    <form action={goodbye}>
      <button type="submit">Log Out</button>
    </form>
  );
}