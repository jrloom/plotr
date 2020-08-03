module.exports = {
  createdBy: (root, args, ctx) =>
    ctx.prisma.findOne({ where: { id: root.id } }).createdBy(),
  cards: (root, args, ctx) =>
    ctx.prisma.findOne({ where: { id: root.id } }).cards(),
}
