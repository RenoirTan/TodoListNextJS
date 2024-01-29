import prisma from "@/db";
import { insert, runner } from "./seeding";
import bcrypt from "bcrypt";

export function hashPasswordSync(password: string) {
  return bcrypt.hashSync(password, 10);
}

(() => {
  const data = [
    {
      email: "renoir@example.com",
      name: "renoir",
      role: "ADMIN",
      password: hashPasswordSync("12345678")
    }
  ];

  runner(insert(data, prisma.user));
})();
