"use client";

import { formChangeName } from "@/lib/auth";
import { useFormState } from "react-dom";

export default async function ChangeNameFormInner({
  userId,
  userName
}: {
  userId: string;
  userName?: string | null;
}) {
  const formChangeNameById = formChangeName.bind(null, userId);
  const [state, dispatch] = useFormState(formChangeNameById, "");

  return (
    <form action={dispatch}>
      <p>Change Name</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" defaultValue={userName || ""} />
      </div>
      <button type="submit">Change Name</button>
      {state && <p>{state}</p>}
    </form>
  );
}