"use client";

import { authenticate } from "@/lib/users";
import { useFormState, useFormStatus } from "react-dom";
import CredentialsFormTitle from "./credentials-form-title";
import CredentialsForm from "./credentials-form";
import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <CredentialsForm>
        <CredentialsFormTitle title="Login" />
        <div>
          <EmailInput />
          <PasswordInput label="Password" name="password" />
        </div>
        <LoginButton />
        {errorMessage && (
          <p className="text-red">{errorMessage}</p>
        )}
      </CredentialsForm>
    </form>
  );
}

export function LoginButton() {
  return (
    <SubmitButton>
      Log In
    </SubmitButton>
  );
}