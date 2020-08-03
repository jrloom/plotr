const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

module.exports = {
  verify: async (root, args, ctx) => {
    let user = await ctx.prisma.user.findOne({ where: { email: args.email } })

    if (!user) {
      const password = await bcrypt.hash(args.password, 10)
      const newUser = await ctx.prisma.user.create({
        data: { ...args, password },
      })
      user = newUser
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) throw new Error('Invalid password')

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return { token, user }
  },
  project: async (root, args, ctx) => {
    const userId = getUserId(ctx)
    const newProject = ctx.prisma.project.create({
      data: {
        title: args.title,
        description: args.description,
        createdBy: { connect: { id: userId } },
      },
    })

    // * maybe later
    // ctx.pubsub.publish('NEW_PROJECT', newProject)

    return newProject
  },
  card: async (root, args, ctx) => {
    const userId = getUserId(ctx)
    const newCard = ctx.prisma.create({
      data: {
        user: { connect: { id: userId } },
        project: { connect: { id: Number(args.projectId) } },
        title: args.title,
        description: args.description,
        card_type: args.card_type,
      },
    })

    return newCard
  },
}
