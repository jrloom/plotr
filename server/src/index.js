const { GraphQLServer, PubSub } = require('graphql-yoga')

const typeDefs = './src/schema.graphql'
const resolvers = require('./resolvers')

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: request => {
    return { ...request, pubsub }
  },
})

server.start(() => console.log('running'))
