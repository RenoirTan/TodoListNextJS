"use client";

import { formChangePassword } from "@/lib/users";
import { useFormState } from "react-dom";
import CredentialsForm from "./credentials-form";
import CredentialsFormTitle from "./credentials-form-title";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

export default function ChangePasswordForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(formChangePassword, initialState);

  return (
    <div>
      <form action={dispatch}>
        <CredentialsForm>
          <CredentialsFormTitle title="Change Password" />
          <PasswordInput
            label="Original Password"
            name="old-password"
            placeholder="Original Password"
          />
          <PasswordInput
            label="New Password"
            name="password"
            placeholder="New Password"
          />
          <PasswordInput
            label="Confirm New Password"
            name="confirm-password"
            placeholder="Confirm New Password"
          />
          <ChangePasswordButton />
          {state?.message && <p>{state.message}</p>}
        </CredentialsForm>
      </form>
    </div>
  );
}

export function ChangePasswordButton() {
  return (
    <SubmitButton>
      Change Password
    </SubmitButton>
  );
}