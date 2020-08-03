module.exports = {
  user: (root, args, ctx) =>
    ctx.prisma.card.findOne({ where: { id: root.id } }).user(),
  project: (root, args, ctx) =>
    ctx.prisma.card.findOne({ where: { id: root.id } }).project(),
}
