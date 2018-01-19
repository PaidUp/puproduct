// Development specific configuration
// ==================================
const mongoHost = process.env.TDUSER_MONGO_HOST || 'localhost'
module.exports = {
  port: process.env.PORT || 9007,
  mongo: {
    uri: 'mongodb://' + mongoHost + '/convenience-dev',
    options: {
      prefix: 'puproduct_'
    }
  }
}
