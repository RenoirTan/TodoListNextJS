"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/db";

export type State = {
  errors?: {};
  message?: string | null
};

export async function formCreateTodo(prevState: State, formData: FormData) {
  const data = {
    title: formData.get("title")?.toString(),
    description: formData.get("description")?.toString(),
    complete: !!formData.get("complete")
  };
  
  console.log(data);

  try {
    const todo = await prisma.todo.create({ data });
  } catch (err: any) {
    console.log(err);
    return { errors: {}, message: "Something went wrong." };
  }

  revalidatePath("/");
  redirect("/");
}