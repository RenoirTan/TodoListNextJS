"use client";

import { formCreateUser } from "@/lib/auth";
import { useFormState } from "react-dom";

export default async function RegisterForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateUser, initialState);

  return (
    <div>
      <form action={dispatch}>
        <h1>Register a new account</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="password" name="confirm-password" placeholder="Confirm Password" />
        </div>
        <button type="submit">Create New Account</button>
      </form>
      {state?.message && <p>{state.message}</p>}
    </div>
  );
}