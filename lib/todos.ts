"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma, { TodoCreateInput } from "@/db";
import { Todo } from "@prisma/client";
import { auth } from "@/auth";
import { todos as todosUrl } from "@/lib/urls";

export async function getRecentTodos(authorId: string, page?: number, query?: string) {
  const trimmed = query?.trim();

  return await prisma.todo.findMany({
    where: {
      authorId,
      OR: (trimmed) ? [
        { title: { contains: trimmed, mode: "insensitive" } },
        { description: { contains: trimmed, mode: "insensitive" } }
      ] : []
    },
    orderBy: [{ updatedAt: "desc" }]
  });
}

export async function getTodo(id: string, authorId: string): Promise<Todo | null> {
  const todo = await prisma.todo.findUnique({ where: { id, authorId } });
  return todo;
}


export type TodoState = {
  errors?: {
    title?: string[];
    description?: string[];
    complete?: string[];
  };
  message?: string | null
};

export async function formCreateTodo(prevState: TodoState, formData: FormData): Promise<TodoState> {
  const session = await auth();
  if (!session) {
    return { message: "Not logged in" };
  }
  if (!session.user?.id) {
    return { message: "User does not have id???" }
  }
  const authorId = session.user.id;

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
    const result = await prisma.user.update({
      where: { id: authorId },
      data: {
        todos: {
          create: { ...validated.data }
        }
      }
    });
  } catch (err: any) {
    const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
    console.log(sendBack);
    return sendBack;
  }

  revalidatePath(todosUrl({}));
  redirect(todosUrl({}));
}

export async function formEditTodo(
  id: string,
  prevState: TodoState,
  formData: FormData
): Promise<TodoState> {
  const session = await auth();
  if (!session) {
    return { message: "Not logged in" };
  }
  if (!session.user?.id) {
    return { message: "User does not have id???" }
  }
  const authorId = session.user.id;

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
      where: { id, authorId },
      data: validated.data
    });
  } catch (err: any) {
    const sendBack = { errors: err.flatten().fieldErrors, message: "Something went wrong." };
    console.log(sendBack);
    return sendBack;
  }

  revalidatePath(todosUrl({}));
  redirect(todosUrl({}));
}

export async function deleteTodo(id: string) {
  try {
    const todo = await prisma.todo.delete({ where: { id } });
  } catch (err: any) {
    return { message: "not found" };
  }
  
  revalidatePath(todosUrl({}));
  redirect(todosUrl({}));
}