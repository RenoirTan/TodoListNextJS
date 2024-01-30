import CredentialsInput from "./credentials-input";

export default function EmailInput({ isRequired }: { isRequired?: boolean; }) {
  if (isRequired === undefined) {
    isRequired = true;
  }

  return (
    <div>
      <CredentialsInput
        type="email"
        label="Email"
        placeholder="(e.g. something@example.com)"
        name="email"
        isRequired={isRequired}
      />
    </div>
  );
}