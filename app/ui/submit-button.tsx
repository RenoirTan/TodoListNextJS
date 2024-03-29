import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children?: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button className="my-2 dark:shadow-lg dark:shadow-blue-900" aria-disabled={pending} color="primary" type="submit">
      {children}
    </Button>
  );
}