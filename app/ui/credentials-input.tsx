import { Input } from "@nextui-org/react";

export default function CredentialsInput({
  type,
  label,
  placeholder,
  name,
  isRequired,
  isDisabled,
  isReadOnly,
  defaultValue
}: {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  defaultValue?: string
}) {
  return <Input
    className="mb-3"
    type={type}
    variant="faded"
    label={label}
    placeholder={placeholder}
    name={name}
    isRequired={isRequired}
    isDisabled={isDisabled}
    isReadOnly={isReadOnly}
    defaultValue={defaultValue}
  />;
}