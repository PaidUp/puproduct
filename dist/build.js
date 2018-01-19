/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nconst path = __webpack_require__(5);\nconst _ = __webpack_require__(6);\n\n// All configurations will extend these options\n// ============================================\nlet all = {\n  env: process.env.NODE_ENV,\n\n  // Root path of server\n  root: path.normalize(path.join(__dirname, '/../../..')),\n\n  // Server port\n  port: process.env.PORT || 9007,\n\n  // Secret for session, you will want to change this and make it an environment variable\n  secrets: {\n    session: 'puproduct-secret'\n  },\n\n  nodePass: {\n    me: {\n      'token': 'puproduct-secret'\n    }\n  },\n  // MongoDB connection options\n  mongo: {\n    uri: 'mongodb://localhost/convenience-dev',\n    options: {\n      db: {\n        safe: true\n      },\n      prefix: 'puproduct_'\n    }\n  },\n\n  logger: {\n    level: {\n      info: 'info',\n      warn: 'warn',\n      error: 'error'\n    },\n    loggly: {\n      inputToken: 'e2834f96-0326-43f1-8fd9-04dd669a11ef',\n      subdomain: 'cstest',\n      tags: ['PUProduct'],\n      level: 'error'\n    }\n  },\n  encryptKey: 'PZ3oXv2v6Pq5HAPFI9NFbQ=='\n\n  // Export the config object based on the NODE_ENV\n  // ==============================================\n};module.exports = all;\nmodule.exports = _.merge(all, __webpack_require__(7)(\"./\" + process.env.NODE_ENV + '.js') || {});\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"mongoose\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _pmx = __webpack_require__(4);\n\nvar _pmx2 = _interopRequireDefault(_pmx);\n\nvar _express = __webpack_require__(1);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(2);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nvar _http = __webpack_require__(11);\n\nvar _http2 = _interopRequireDefault(_http);\n\nvar _express3 = __webpack_require__(12);\n\nvar _express4 = _interopRequireDefault(_express3);\n\nvar _routes = __webpack_require__(17);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nprocess.env.NODE_ENV = process.env.NODE_ENV || 'development';\n\n_pmx2.default.init({\n  http: true, // HTTP routes logging (default: true)\n  ignore_routes: [/socket\\.io/, /notFound/], // Ignore http routes with this pattern (Default: [])\n  errors: true, // Exceptions loggin (default: true)\n  custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics\n  network: true, // Network monitoring at the application level\n  ports: true // Shows which ports your app is listening on (default: false)\n});\n\n_mongoose2.default.connect(_environment2.default.mongo.uri, _environment2.default.mongo.options);\n\nconst app = (0, _express2.default)();\nconst server = _http2.default.createServer(app);\n(0, _express4.default)(app);\n(0, _routes2.default)(app);\n\n// Start server\nif (_environment2.default.env !== 'test') {\n  try {\n    server.listen(_environment2.default.port, _environment2.default.ip, function () {\n      console.log('Express server listening on %d, in %s mode', _environment2.default.port, app.get('env'));\n    });\n  } catch (err) {\n    console.log('error:', err);\n  }\n}\n\nexports.default = app;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/app.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"pmx\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"pmx\"\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22pmx%22?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"lodash\"\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./development.js\": 8,\n\t\"./index.js\": 0,\n\t\"./production.js\": 9,\n\t\"./test.js\": 10\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 7;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment ^\\.\\/.*\\.js$\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment_^\\.\\/.*\\.js$?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Development specific configuration\n// ==================================\nconst mongoHost = process.env.TDUSER_MONGO_HOST || 'localhost';\nmodule.exports = {\n  port: process.env.PORT || 9007,\n  mongo: {\n    uri: 'mongodb://' + mongoHost + '/convenience-dev',\n    options: {\n      prefix: 'puproduct_'\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/development.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/development.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Production specific configuration\n// =================================\n\nconst mongoHost = process.env.TDUSER_MONGO_HOST || 'localhost';\nmodule.exports = {\n  // Server IP\n  mongo: {\n    uri: 'mongodb://' + mongoHost + '/convenience-dev',\n    options: {\n      prefix: 'puproduct_'\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/production.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/production.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Test specific configuration\n// ===========================\n\nmodule.exports = {\n  // MongoDB connection options\n  mongo: {\n    uri: 'mongodb://localhost/convenience-test',\n    options: {\n      prefix: 'puproduct_'\n    }\n  },\n  commerce: {\n    magento: {\n      host: 'develop.getpaidup.com',\n      port: 8888,\n      path: '/api/xmlrpc/',\n      login: 'magento',\n      pass: 'Sv38SJVR'\n    },\n    paymentPlan: {\n      intervalElapsed: 5,\n      intervalType: 'minutes'\n    }\n  },\n  nodePass: {\n    me: {\n      me: 'tdschedule-secret'\n    }\n  }\n\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/test.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/test.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"http\"\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (app) {\n  app.use((0, _compression2.default)());\n  app.use(_bodyParser2.default.urlencoded({ extended: false }));\n  app.use(_bodyParser2.default.json());\n  app.use((0, _methodOverride2.default)());\n  app.use((0, _cookieParser2.default)());\n};\n\nvar _compression = __webpack_require__(13);\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _bodyParser = __webpack_require__(14);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _methodOverride = __webpack_require__(15);\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nvar _cookieParser = __webpack_require__(16);\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/express.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/express.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"compression\"\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"body-parser\"\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"method-override\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"cookie-parser\"\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (app) {\n  // Insert routes below\n  app.use('/api/v1', __webpack_require__(18));\n\n  app.route('/*').get(function (request, response) {\n    response.status(200).json({ PU: 'Product!!!' });\n  });\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/routes.js\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/routes.js?");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst express = __webpack_require__(1);\nconst router = express.Router();\n\nrouter.use('/organization', __webpack_require__(19));\nmodule.exports = router;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/index.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/index.js?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(1);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(20);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _organization = __webpack_require__(22);\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst router = _express2.default.Router();\n\nrouter.post('/request', _auth2.default.isAuthenticated(), _organization2.default.organizationRequest);\nrouter.get('/response/:id', _auth2.default.isAuthenticated(), _organization2.default.organizationResponse);\nrouter.put('/response/:id/:paymentId', _auth2.default.isAuthenticated(), _organization2.default.organizationResponseUpdate);\n\nrouter.get('/:organizationId', _auth2.default.isAuthenticated(), _organization2.default.getOrganization);\n\nmodule.exports = router;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/organization/index.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/organization/index.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nvar _composableMiddleware = __webpack_require__(21);\n\nvar _composableMiddleware2 = _interopRequireDefault(_composableMiddleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Attaches the user object to the request if authenticated\n * Otherwise returns 403\n */\n\nconst authService = {};\n\nauthService.isAuthenticated = function () {\n  return (0, _composableMiddleware2.default)().use(function (req, res, next) {\n    let token = serverTokenAuthenticated(req);\n    let localToken = _environment2.default.nodePass.me.token;\n    if (token === localToken) {\n      return next();\n    } else {\n      return res.sendStatus(401);\n    }\n  });\n};\n\nfunction serverTokenAuthenticated(req) {\n  let token = null;\n  // allow access_token to be passed through query parameter as well\n  if (req.query && req.query.hasOwnProperty('token')) {\n    token = req.query.token;\n  } else if (req.body && req.body.token) {\n    token = req.body.token;\n  } else if (req.query && req.query.hasOwnProperty('access_token')) {\n    token = req.query.token;\n  } else if (req.headers.authorization) {\n    token = req.headers.authorization;\n  }\n  return token;\n}\n\nexports.default = authService;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/auth/auth.service.js\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/auth/auth.service.js?");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

eval("module.exports = require(\"composable-middleware\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"composable-middleware\"\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22composable-middleware%22?");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _organization = __webpack_require__(23);\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst logger = __webpack_require__(26);\n\nconst organizationController = {};\n\norganizationController.organizationRequest = function (req, res) {\n  _organization2.default.organizationRequest(req.body.userId, req.body.organizationInfo, function (error, organization) {\n    if (error) {\n      return handleError(res, error);\n    }\n    return res.status(200).json({ organizationId: organization._id });\n  });\n};\n\norganizationController.organizationResponse = function (req, res) {\n  _organization2.default.organizationResponse(req.params.id, function (err, organization) {\n    if (err) {\n      return handleError(res, err);\n    }\n    if (!organization) {\n      return handleError(res, { name: 'ValidationError', message: 'organization does not exists', errors: 'organization does not exists or was processed' });\n    }\n    return res.status(200).json(organization);\n  });\n};\n\norganizationController.organizationResponseUpdate = function organizationResponseUpdate(req, res) {\n  _organization2.default.organizationResponseUpdate(req.params.id, req.params.paymentId, function (err, organization) {\n    if (err) {\n      return handleError(res, err);\n    }\n    if (!organization) {\n      return handleError(res, { name: 'ValidationError', message: 'organization was processed', errors: 'organization does not exists or was processed' });\n    }\n    return res.status(200).json(organization);\n  });\n};\n\norganizationController.getOrganization = function (req, res) {\n  _organization2.default.findById(req.params.organizationId, function (err, organization) {\n    if (err) {\n      return handleError(res, err);\n    }\n    return res.status(200).json(organization);\n  });\n};\n\nfunction handleError(res, err) {\n  let httpErrorCode = 500;\n\n  if (err.name === 'ValidationError') {\n    httpErrorCode = 400;\n  }\n  logger.log('error', err);\n\n  return res.status(httpErrorCode).json({ code: err.name, message: err.message, errors: err.errors });\n}\n\nexports.default = organizationController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/organization/organization.controller.js\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/organization/organization.controller.js?");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _organizationModel = __webpack_require__(24);\n\nvar _organizationModel2 = _interopRequireDefault(_organizationModel);\n\nvar _blind = __webpack_require__(25);\n\nvar _blind2 = _interopRequireDefault(_blind);\n\nvar _index = __webpack_require__(0);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst organizationService = {};\n\norganizationService.save = function (organization, cb) {\n  // console.log('organization service',organization)\n  organization.save(function (err, data) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, data);\n  });\n};\n\norganizationService.create = function (organization, cb) {\n  organization.create(organization, function (err, data) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, data);\n  });\n};\n\norganizationService.findOne = function (filter, fields, cb) {\n  _organizationModel2.default.findOne(filter, fields, function (err, data) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, data);\n  });\n};\n\norganizationService.findById = function (id, cb) {\n  _organizationModel2.default.findById(id, function (err, organization) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, organization);\n  });\n};\n\norganizationService.find = function (filter, fields, cb) {\n  _organizationModel2.default.find(filter, fields, function (err, data) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, data);\n  });\n};\n\norganizationService.update = function (filter, value, cb) {\n  _organizationModel2.default.update(filter, value, function (err, data) {\n    if (err) {\n      return cb(err);\n    }\n    return cb(null, data);\n  });\n};\n\norganizationService.encryptField = function (value) {\n  var encrypted = new _blind2.default({ encryptKey: _index2.default.encryptKey }).encrypt(value);\n  return encrypted;\n};\n\norganizationService.decryptField = function (encryptedValue) {\n  var decrypted = new _blind2.default({ encryptKey: _index2.default.encryptKey }).decrypt(encryptedValue);\n  return decrypted;\n};\n\norganizationService.getlast4Field = function (encryptedValue) {\n  let last4Field = organizationService.decryptField(encryptedValue);\n  return last4Field.substring(last4Field.length - 4, last4Field.length);\n};\n\norganizationService.organizationRequest = function (userId, dataOrganization, cb) {\n  dataOrganization.ownerId = userId;\n  dataOrganization.aba = organizationService.encryptField(dataOrganization.aba);\n  dataOrganization.dda = organizationService.encryptField(dataOrganization.dda);\n  dataOrganization.ownerSSN = organizationService.encryptField(dataOrganization.ownerSSN);\n  let newOrganization = new _organizationModel2.default(dataOrganization);\n  organizationService.save(newOrganization, function (err, data) {\n    if (err) return cb(err);\n    return cb(null, data);\n  });\n};\n\norganizationService.organizationResponse = function (organizationId, cb) {\n  organizationService.findOne({ verify: 'pending', _id: organizationId }, '', function (err, organization) {\n    if (err) return cb(err);\n    if (!organization) return cb(null);\n    organization.aba = organizationService.decryptField(organization.aba);\n    organization.dda = organizationService.decryptField(organization.dda);\n    organization.ownerSSN = organizationService.decryptField(organization.ownerSSN);\n    return cb(null, organization);\n  });\n};\n\norganizationService.organizationResponseUpdate = function (organizationId, paymentId, cb) {\n  organizationService.update({ _id: organizationId }, { verify: 'done', aba: '', dda: '', ownerSSN: '', paymentId: paymentId }, function (err, organization) {\n    if (err) return cb(err);\n    return cb(null, organization);\n  });\n};\n\nexports.default = organizationService;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/organization/organization.service.js\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/organization/organization.service.js?");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst mongoose = __webpack_require__(2);\nconst Schema = mongoose.Schema;\nconst config = __webpack_require__(0);\n\nlet organizationSchema = new Schema({\n  // Team info\n  // teamName: { type: String, default: true}, // email //response\n  // teamNumber: { type: String, default: '1'}, // email\n  // teamAverageSize: { type: String, default: '1' }, // email\n  // teamSport: {type: String},\n  // End team info\n  // Owner info\n  ownerId: { type: String },\n  ownerFirstName: { type: String, required: true }, // required //email //newDesign\n  ownerLastName: { type: String, required: true }, // required //email //newDesign\n  ownerDOB: { type: Date }, // required //email //newDesign\n  ownerSSN: { type: String, required: true }, // required //email //newDesign\n  ownerEmail: { type: String }, // email //response\n  ownerPhone: { type: String }, // email\n  // End owner info\n  // Billing info\n  country: { type: String, default: 'US' }, // required //email //response\n  state: { type: String, required: true }, // required //email //newDesign\n  city: { type: String, required: true }, // required //email //newDesign\n  zipCode: { type: String, required: true }, // required //newDesign\n  averagePayment: { type: String, default: '1' }, // email\n  EIN: { type: String }, // required //email //newDesign\n  Address: { type: String, required: true }, // required //email //newDesign\n  AddressLineTwo: { type: String }, // required //email //newDesign\n  website: { type: String, default: 'https://www.getpaidup.com' }, // email\n  businessName: { type: String, required: true }, // required //email //newDesign\n  // phoneNumber: { type: String, default: '0000000000'}, // email\n  businessType: { type: String, required: true }, // required //newDesign\n  // End billing info\n  // Billing info\n  aba: { type: String, required: true }, // required //email //response //newDesign\n  dda: { type: String, required: true }, // required //email //response //newDesign\n  // End billing info\n  createAt: { type: Date, default: new Date() },\n  updateAt: { type: Date, default: new Date() },\n  verify: { type: String, default: 'pending' },\n  referralCode: { type: String, default: '' }, // email\n  paymentId: { type: String, default: '' },\n  seasons: { type: [String], default: [] }\n});\n\n/**\n * Pre-save hook\n */\norganizationSchema.pre('save', function (next) {\n  if (!this.isNew) return next();\n  this.update_at = new Date();\n  next();\n});\n\nmodule.exports = mongoose.model('organization', organizationSchema, config.mongo.options.prefix + 'organizations');\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/organization/organization.model.js\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/organization/organization.model.js?");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

eval("module.exports = require(\"blind\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"blind\"\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22blind%22?");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst config = __webpack_require__(0);\nconst winston = __webpack_require__(27);\n__webpack_require__(28);\n\nlet env = process.env.NODE_ENV;\n\nlet logger = new winston.Logger({\n  transports: [new winston.transports.Console({\n    level: config.logger.level.info,\n    handleExceptions: true,\n    json: true,\n    colorize: true\n  }), new winston.transports.File({\n    level: config.logger.level.warn,\n    handleExceptions: true,\n    json: true,\n    colorize: true,\n    filename: config.root + '/var/logs/all-logs.log',\n    maxsize: 5242880, // 5MB\n    maxFiles: 5\n  }), new winston.transports.Loggly({\n    level: config.logger.loggly.level,\n    handleExceptions: true,\n    json: true,\n    inputToken: config.logger.loggly.inputToken,\n    subdomain: config.logger.loggly.subdomain,\n    tags: config.logger.loggly.tags\n  })],\n  exitOnError: false\n});\n\nwinston.emitErrs = true;\n\nif (env === 'test') {\n  logger.remove(winston.transports.File).remove(winston.transports.Console).remove(winston.transports.Loggly);\n}\n\nmodule.exports = logger;\nmodule.exports.stream = {\n  write: function (message, encoding) {\n    logger.info(message);\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/logger.js\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/logger.js?");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"winston\"\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston-loggly\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"winston-loggly\"\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22winston-loggly%22?");

/***/ })
/******/ ]);