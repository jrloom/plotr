module.exports = {
  projects: (root, args, ctx) => {
    ctx.prisma.findOne({ where: { id: root.id } }).projects()
  },
}
