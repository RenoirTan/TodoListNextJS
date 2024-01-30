import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children?: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button aria-disabled={pending} color="primary" variant="shadow" type="submit">
      {children}
    </Button>
  );
}