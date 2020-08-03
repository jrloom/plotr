const jwt = require('jsonwebtoken')

const APP_SECRET = 'bequiet'

module.exports = {
  APP_SECRET,
  getUserId: ctx => {
    const Authorization = ctx.request.get('Authorization')

    if (Authorization) {
      const token = Authorization.replace('Bearer', '')
      const { userId } = jwt.verify(token, APP_SECRET)

      return userId
    }
    throw new Error('Not authorized')
  },
}
