import { signOut } from "@/auth";

export default function LogoutButton() {
  async function goodbye() {
    "use server";
    await signOut();
  }

  return (
    <form action={goodbye}>
      <button type="submit">Log Out</button>
    </form>
  );
}