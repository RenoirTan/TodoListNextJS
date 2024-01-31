import { goodbye } from "@/lib/users";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

export default function LogoutButton() {
  return (
    <form action={goodbye}>
      <button type="submit" className="flex flex-row items-center gap-x-5 md:gap-x-1.5 text-vermillion">
        <ArrowLeftStartOnRectangleIcon className="h-[1em] w-[1em]" />
        <p>Log Out</p>
      </button>
    </form>
  );
}