"use server";

import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import prisma from "@/db";
import { signIn } from "@/app/api/auth/[...nextauth]/route";

export async function getUser(email: string) {
  console.log(`getUser ${prisma.user}`);
  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user);
  return user;
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    await signIn("Credentials", credentials);
  } catch (err: any) {
    if (err instanceof AuthError) {
      if (err.type === "CredentialsSignin") {
        return "Invalid Credentials.";
      } else {
        return "Something went wrong."
      }
    }
    throw err;
  }
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}
