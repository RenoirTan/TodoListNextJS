import prisma from "@/db";
import { insert, runner } from "./seeding";
import { hashPassword } from "@/lib/auth";

(async () => {
  const data = [
    {
      email: "renoir@example.com",
      name: "renoir",
      role: "ADMIN",
      password: await hashPassword("12345678")
    }
  ];

  runner(insert(data, prisma.user));
})();
