"use client";

import { formChangeName } from "@/lib/users";
import { useFormState } from "react-dom";
import CredentialsForm from "./credentials-form";
import CredentialsFormTitle from "./credentials-form-title";
import CredentialsInput from "./credentials-input";
import SubmitButton from "./submit-button";

export default async function ChangeNameFormInner({ userName }: { userName?: string | null; }) {
  const [state, dispatch] = useFormState(formChangeName, "");

  return (
    <form action={dispatch}>
      <CredentialsForm>
        <CredentialsFormTitle title="Change Username" />
        <CredentialsInput type="text" label="New Username" name="name" defaultValue={userName || ""} />
        <SubmitButton>Change Name</SubmitButton>
        {state && <p>{state}</p>}
      </CredentialsForm>
    </form>
  );
}