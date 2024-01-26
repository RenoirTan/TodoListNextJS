// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient, Prisma } from '@prisma/client'
import { z } from "zod";

export const TodoCreateInput = z.object({
  title: z.string(),
  description: z.string(),
  complete: z.coerce.boolean(),
}) satisfies z.Schema<Prisma.TodoCreateInput>;

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    query: {
      todo: {
        create({ args, query }) {
          args.data = TodoCreateInput.parse(args.data);
          return query(args);
        },
        update({ args, query }) {
          args.data = TodoCreateInput.partial().parse(args.data);
          return query(args);
        },
        updateMany({ args, query }) {
          args.data = TodoCreateInput.partial().parse(args.data);
          return query(args);
        },
        upsert({ args, query }) {
          args.create = TodoCreateInput.parse(args.create);
          args.update = TodoCreateInput.partial().parse(args.update);
          return query(args);
        }
      }
    }
  });
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
