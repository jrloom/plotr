module.exports = {
  sanity: () => `>> sane <<`,
  sort_projects: async (root, args, ctx) => {
    const where = args.filter
      ? {
          OR: [
            { title: { contains: args.filter } },
            { description: { contains: args.filter } },
          ],
        }
      : {}

    const projects = await ctx.prisma.project.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })

    const count = await ctx.prisma.project.count({ where })

    return { projects, count }
  },
}
