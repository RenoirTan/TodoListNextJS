import CredentialsInput from "./credentials-input";

export default function PasswordInput({
  label,
  name,
  placeholder
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  if (placeholder === undefined) {
    placeholder = `Enter ${label}`;
  }

  return (
    <div>
      <CredentialsInput
        type="password"
        label={label}
        name={name}
        placeholder={placeholder}
        isRequired
      />
    </div>
  );
}