import { useState } from "react";
import CredentialsInput from "./credentials-input";
import { Button } from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function PasswordInput({
  label,
  name,
  placeholder
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  const [plaintext, setPlaintext] = useState(false);

  if (placeholder === undefined) {
    placeholder = `Enter ${label}`;
  }

  return (
    <div className="relative">
      <CredentialsInput
        type={(plaintext) ? "text": "password"}
        label={label}
        name={name}
        placeholder={placeholder}
        isRequired
        endContent={<PasswordVisibilityToggle plaintext={plaintext} setPlaintext={setPlaintext} />}
      />
    </div>
  );
}

export function PasswordVisibilityToggle({
  plaintext,
  setPlaintext
}: {
  plaintext: boolean;
  setPlaintext: (plaintext: boolean) => void;
}) {
  return (
    <Button type="button" size="sm" variant="light" onClick={() => setPlaintext(!plaintext)}>
      {plaintext ? (
        <EyeSlashIcon className="text-sm text-default-400 pointer-events-none" />
      ) : (
        <EyeIcon className="text-sm text-default-400 pointer-events-none" />
      )}
    </Button>
  );
}