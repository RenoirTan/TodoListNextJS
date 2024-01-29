"use client";

import { authenticate } from "@/lib/users";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <h1>Please log in to continue.</h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email address" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Enter password" required />
        </div>
      </div>
      <LoginButton />
      {errorMessage && (
        <p className="text-red">{errorMessage}</p>
      )}
    </form>
  );
}

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending}>
      Log In
    </button>
  );
}