// import { todos } from "@/lib/dummy";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRecentTodos() {
  return await prisma.todo.findMany();
}

export async function createTodo(data: { title: string, description: string, complete: boolean }) {
  const todo = await prisma.todo.create({ data });
}

export async function deleteTodo(id: string) {
  const todo = await prisma.todo.delete({ where: { id } });
}