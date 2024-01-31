import { goodbye } from "@/lib/users";

export default function LogoutButton() {
  return (
    <form action={goodbye}>
      <button type="submit">Log Out</button>
    </form>
  );
}