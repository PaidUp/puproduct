import config from '@/config/environment'
import compose from 'composable-middleware'
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */

const authService = {}

authService.isAuthenticated = function () {
  return compose().use(function (req, res, next) {
    let token = serverTokenAuthenticated(req)
    let localToken = config.nodePass.me.token
    if (token === localToken) {
      return next()
    } else {
      return res.sendStatus(401)
    }
  })
}

function serverTokenAuthenticated (req) {
  let token = null
  // allow access_token to be passed through query parameter as well
  if (req.query && req.query.hasOwnProperty('token')) {
    token = req.query.token
  } else if (req.body && req.body.token) {
    token = req.body.token
  } else if (req.query && req.query.hasOwnProperty('access_token')) {
    token = req.query.token
  } else if (req.headers.authorization) {
    token = req.headers.authorization
  }
  return token
}

export default authService
