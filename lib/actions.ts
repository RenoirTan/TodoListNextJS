"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma, { TodoCreateInput } from "@/db";
import { Todo } from "@prisma/client";

export async function getRecentTodos() {
  console.log("getRecentTodos");
  return await prisma.todo.findMany();
}

export async function getTodo(id: string): Promise<Todo | null> {
  console.log("getTodo");
  const todo = await prisma.todo.findUnique({ where: { id } });
  return todo;
}


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

export async function formEditTodo(
  id: string,
  prevState: State,
  formData: FormData
): Promise<State> {
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
    const todo = await prisma.todo.update({
      where: { id },
      data: validated.data
    });
  } catch (err: any) {
    const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
    console.log(sendBack);
    return sendBack;
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteTodo(id: string) {
  try {
    const todo = await prisma.todo.delete({ where: { id } });
  } catch (err: any) {
    return { message: "not found" };
  }
  
  revalidatePath("/");
  redirect("/");
}