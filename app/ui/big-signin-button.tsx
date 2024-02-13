"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function BigSigninButton() {
  return <Button onClick={() => signIn()}>Log In</Button>
}