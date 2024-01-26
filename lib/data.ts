import prisma from "@/db";
import { Todo } from "@prisma/client";

export async function getRecentTodos() {
  return await prisma.todo.findMany();
}

export async function getTodo(id: string): Promise<Todo | null> {
  const todo = await prisma.todo.findUnique({ where: { id }});
  return todo;
}

export async function deleteTodo(id: string) {
  const todo = await prisma.todo.delete({ where: { id } });
}