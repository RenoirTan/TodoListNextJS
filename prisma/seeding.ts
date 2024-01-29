import prisma from "@/db";

export async function insert(data: any, table: any) {
  const many = await table.createMany({ data, skipDuplicates: true });
}

export function runner(main: Promise<any>) {
  main
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
