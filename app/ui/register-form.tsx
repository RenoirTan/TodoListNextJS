"use client";

import { formCreateUser } from "@/lib/users";
import { useFormState, useFormStatus } from "react-dom";
import CredentialsForm from "./credentials-form";
import CredentialsFormTitle from "./credentials-form-title";
import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

export default async function RegisterForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formCreateUser, initialState);

  return (
    <div>
      <form action={dispatch}>
        <CredentialsForm>
          <CredentialsFormTitle title="Register" />
          <EmailInput />
          <PasswordInput label="Password" name="password" placeholder="Enter Password" />
          <PasswordInput label="Confirm Password" name="confirm-password" placeholder="Confirm Password" />
          <RegisterButton />
          {state?.message && <p>{state.message}</p>}
        </CredentialsForm>
      </form>
    </div>
  );
}

export function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <SubmitButton>
      Create New Account
    </SubmitButton>
  );
}