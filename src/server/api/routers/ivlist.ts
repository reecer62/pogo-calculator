import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const ivListRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.iVList.findMany({
      where: {
        userId: ctx.session?.user.id
      }
    })
  }),

  create: protectedProcedure
    .input(z.object({name: z.string()}))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.iVList.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id
        }
      })
    })
});
