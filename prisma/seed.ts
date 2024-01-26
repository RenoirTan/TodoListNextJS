import prisma from "@/db";

async function main() {
  const todo = await prisma.todo.create({
    data: {
      title: "Bruh",
      description: "Why",
      complete: false
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });