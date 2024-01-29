"use client";

import { formChangePassword } from "@/lib/auth";
import { useFormState } from "react-dom";

export default async function ChangePasswordForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formChangePassword, initialState);

  return (
    <div>
      <form action={dispatch}>
        <h1>Change Password</h1>
        <div>
          <label htmlFor="old-password">Original Password</label>
          <input type="password" id="old-password" name="old-password" placeholder="Original Password" />
        </div>
        <div>
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="password" name="confirm-password" placeholder="Confirm Password" />
        </div>
        <button type="submit">Change Password</button>
      </form>
      {state?.message && <p>{state.message}</p>}
    </div>
  );
}