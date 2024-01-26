"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma, { TodoCreateInput } from "@/db";

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    complete?: string[];
  };
  message?: string | null
};

export async function formCreateTodo(prevState: State, formData: FormData): Promise<State> {
  const validated = TodoCreateInput.safeParse({
    title: formData.get("title")?.toString(),
    description: formData.get("description")?.toString(),
    complete: formData.get("complete")
  });

  if (!validated.success) {
    const sendBack = {
      errors: validated.error.flatten().fieldErrors,
      message: "Invalid fields"
    };
    console.log(sendBack);
    return sendBack;
  }

  try {
    const todo = await prisma.todo.create({ data: validated.data });
  } catch (err: any) {
    const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
    console.log(sendBack);
    return sendBack;
  }

  revalidatePath("/");
  redirect("/");
}