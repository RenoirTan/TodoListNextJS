// import { todos } from "@/lib/dummy";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRecentTodos() {
  return await prisma.todo.findMany();
}
