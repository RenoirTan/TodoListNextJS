import bcrypt from "bcrypt";
import prisma from "@/db";

export async function getUser(email: string) {
  return await prisma.user.findUnique({ where: { email } });
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}
