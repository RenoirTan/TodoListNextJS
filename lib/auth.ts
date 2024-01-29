"use server";

import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/db";
import {
  auth,
  changePasswordCredentialsValidator,
  createUserCredentialsValidator,
  signIn
} from "@/auth";
// import { signIn } from "next-auth/react";

export async function getUser(email: string) {
  console.log(`getUser ${Object.keys(prisma)}`);
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
    await signIn("credentials", credentials);
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

export async function createUser(email: string, password: string) {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword
    }
  });
  return user;
}

export type CreateUserState = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null
};

export async function formCreateUser(prevState: CreateUserState, formData: FormData) {
  const parsedCredentials = createUserCredentialsValidator.safeParse({
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirm-password")?.toString()
  });

  if (!parsedCredentials.success) {
    const sendBack = {
      errors: parsedCredentials.error.flatten().fieldErrors,
      message: "Invalid fields"
    };
    console.log(sendBack);
    return sendBack;
  }

  try {
    const user = await createUser(parsedCredentials.data.email, parsedCredentials.data.password);
  } catch (err: any) {
    const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
    console.log(sendBack);
    return sendBack;
  }

  redirect("/");
}

export type ChangePasswordState = {
  errors?: {
    email?: string[];
    originalPassword?: string[];
    password?: string[]; // new password
    confirmPassword?: string[];
  };
  message?: string | null
};

export async function changePassword(id: string, originalPassword: string, newPassword: string) {
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUniqueOrThrow({ where: { id } });
    if (!await comparePassword(originalPassword, user.password || "")) {
      throw "Wrong Password.";
    }
    const password = await hashPassword(newPassword);
    return await tx.user.update({
      where: { id },
      data: { password }
    });
  });
}

export async function formChangePassword(prevState: ChangePasswordState, formData: FormData) {
  const session = await auth();
  if (!session) {
    return { message: "Not logged in" };
  }
  console.log(session);
  const id = session.user?.id;
  if (!id) {
    return { message: "Session's user does not have an id???" };
  }

  const parsedCredentials = changePasswordCredentialsValidator.safeParse({
    oldPassword: formData.get("old-password")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirm-password")?.toString()
  });

  if (!parsedCredentials.success) {
    const sendBack = {
      errors: parsedCredentials.error.flatten().fieldErrors,
      message: "Invalid fields"
    };
    console.log(sendBack);
    return sendBack;
  }

  try {
    const { oldPassword, password } = parsedCredentials.data;
    const user = await changePassword(id, oldPassword, password);
  } catch (err: any) {
    if (err instanceof String) {
      return { errors: { oldPassword: [err] }, message: "Invalid fields" };
    } else {
      const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
      console.log(sendBack);
      return sendBack;
    }
  }

  redirect("/");
}
 
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}
