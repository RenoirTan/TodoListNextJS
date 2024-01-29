import prisma from "@/db";
import { insert, runner } from "./seeding";

const data = [
  {
    title: "Bruh",
    description: "Why",
    complete: false
  }
];

(() => {
  runner(insert(data, prisma.todo));
})();
