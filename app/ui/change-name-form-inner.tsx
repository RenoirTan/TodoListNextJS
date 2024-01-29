"use client";

import { formChangeName } from "@/lib/users";
import { useFormState } from "react-dom";

export default async function ChangeNameFormInner({ userName }: { userName?: string | null; }) {
  const [state, dispatch] = useFormState(formChangeName, "");

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