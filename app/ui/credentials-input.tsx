import { Input } from "@nextui-org/react";
import React from "react";

export default function CredentialsInput({
  type,
  label,
  placeholder,
  name,
  isRequired,
  isDisabled,
  isReadOnly,
  defaultValue,
  endContent
}: {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  defaultValue?: string;
  endContent?: React.ReactNode;
}) {
  return <Input
    className="mb-3"
    type={type}
    variant="flat"
    label={label}
    placeholder={placeholder}
    name={name}
    isRequired={isRequired}
    isDisabled={isDisabled}
    isReadOnly={isReadOnly}
    defaultValue={defaultValue}
    endContent={endContent}
  />;
}