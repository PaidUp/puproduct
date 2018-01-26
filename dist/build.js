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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _path = __webpack_require__(9);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _lodash = __webpack_require__(10);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _development = __webpack_require__(11);\n\nvar _development2 = _interopRequireDefault(_development);\n\nvar _production = __webpack_require__(12);\n\nvar _production2 = _interopRequireDefault(_production);\n\nvar _test = __webpack_require__(13);\n\nvar _test2 = _interopRequireDefault(_test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar envs = {\n  development: _development2.default,\n  production: _production2.default,\n  test: _test2.default\n\n  // All configurations will extend these options\n  // ============================================\n};var all = {\n  env: process.env.NODE_ENV,\n\n  // Root path of server\n  root: _path2.default.normalize(_path2.default.join(__dirname, '/../../..')),\n\n  // Server port\n  port: process.env.PORT || 9007,\n\n  // Secret for session, you will want to change this and make it an environment variable\n  secrets: {\n    session: 'puproduct-secret'\n  },\n\n  nodePass: {\n    me: {\n      'token': 'puproduct-secret'\n    }\n  },\n  logger: {\n    projectId: 'gothic-talent-192920',\n    logName: 'pu-product-dev-log',\n    metadata: { resource: { type: 'global' } }\n  },\n  encryptKey: 'PZ3oXv2v6Pq5HAPFI9NFbQ=='\n\n  // Export the config object based on the NODE_ENV\n  // ==============================================\n};exports.default = _lodash2.default.merge(all, envs[process.env.NODE_ENV] || {});\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"mongoose\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"pmx\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"pmx\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22pmx%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _logging = __webpack_require__(19);\n\nvar _logging2 = _interopRequireDefault(_logging);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nvar _pmx = __webpack_require__(3);\n\nvar _pmx2 = _interopRequireDefault(_pmx);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar logging = new _logging2.default({\n  projectId: _environment2.default.logger.projectId\n});\nvar log = logging.log(_environment2.default.logger.logName);\nvar metadata = _environment2.default.logger.metadata;\n\nfunction localLog(type, msg) {\n  var plainMsg = JSON.stringify(msg);\n  if (type === 'info') {\n    console.info(plainMsg);\n  } else if (type === 'debug') {\n    console.debug(plainMsg);\n  } else if (type === 'warning') {\n    console.warn(plainMsg);\n  } else {\n    console.error(plainMsg);\n  }\n}\n\nfunction write(type, msg, notify) {\n  var entry = log.entry(metadata, msg);\n  if (notify) {\n    _pmx2.default.notify(msg);\n  }\n  log[type](entry, function (err, apiResponse) {\n    if (err) {\n      console.error('Error: ', err);\n      console.error(type + ': ', JSON.stringify(msg));\n    }\n  });\n  if (process.env.NODE_ENV === 'development') {\n    localLog(type, msg);\n  }\n}\n\nvar Logger = function () {\n  function Logger() {\n    _classCallCheck(this, Logger);\n  }\n\n  _createClass(Logger, null, [{\n    key: 'info',\n    value: function info(msg) {\n      write('info', msg);\n    }\n  }, {\n    key: 'critical',\n    value: function critical(msg) {\n      write('critical', msg, true);\n    }\n  }, {\n    key: 'debug',\n    value: function debug(msg) {\n      write('debug', msg);\n    }\n  }, {\n    key: 'emergency',\n    value: function emergency(msg) {\n      write('emergency', msg, true);\n    }\n  }, {\n    key: 'error',\n    value: function error(msg) {\n      write('error', msg, true);\n    }\n  }, {\n    key: 'notice',\n    value: function notice(msg) {\n      write('notice', msg);\n    }\n  }, {\n    key: 'warning',\n    value: function warning(msg) {\n      write('warning', msg);\n    }\n  }]);\n\n  return Logger;\n}();\n\nexports.default = Logger;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/util/logger.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/util/logger.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nvar _composableMiddleware = __webpack_require__(23);\n\nvar _composableMiddleware2 = _interopRequireDefault(_composableMiddleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Attaches the user object to the request if authenticated\n * Otherwise returns 403\n */\n\nvar authService = {};\n\nauthService.isAuthenticated = function () {\n  return (0, _composableMiddleware2.default)().use(function (req, res, next) {\n    var token = serverTokenAuthenticated(req);\n    var localToken = _environment2.default.nodePass.me.token;\n    if (token === localToken) {\n      return next();\n    } else {\n      return res.sendStatus(401);\n    }\n  });\n};\n\nfunction serverTokenAuthenticated(req) {\n  var token = null;\n  // allow access_token to be passed through query parameter as well\n  if (req.query && req.query.hasOwnProperty('token')) {\n    token = req.query.token;\n  } else if (req.body && req.body.token) {\n    token = req.body.token;\n  } else if (req.query && req.query.hasOwnProperty('access_token')) {\n    token = req.query.token;\n  } else if (req.headers.authorization) {\n    token = req.headers.authorization;\n  }\n  return token;\n}\n\nexports.default = authService;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/auth/auth.service.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/auth/auth.service.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _logger = __webpack_require__(4);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HandlerResponse = function () {\n  function HandlerResponse(response) {\n    _classCallCheck(this, HandlerResponse);\n\n    this.response = response;\n  }\n\n  _createClass(HandlerResponse, [{\n    key: 'send',\n    value: function send(msg) {\n      return this.response.status(200).json(msg);\n    }\n  }, {\n    key: 'error',\n    value: function error(msg, code) {\n      _logger2.default.error({ code: code, resason: msg });\n      return this.response.status(code || 500).json(msg);\n    }\n  }]);\n\n  return HandlerResponse;\n}();\n\nexports.default = HandlerResponse;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/util/handlerResponse.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/util/handlerResponse.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _product = __webpack_require__(30);\n\nvar _product2 = _interopRequireDefault(_product);\n\nvar _handlerResponse = __webpack_require__(6);\n\nvar _handlerResponse2 = _interopRequireDefault(_handlerResponse);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ProductController = function () {\n  function ProductController() {\n    _classCallCheck(this, ProductController);\n  }\n\n  _createClass(ProductController, null, [{\n    key: 'save',\n    value: function save(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      var product = req.body;\n      _product2.default.save(product).then(function (result) {\n        hr.send(result);\n      }).catch(function (reason) {\n        hr.error(reason);\n      });\n    }\n  }, {\n    key: 'updateById',\n    value: function updateById(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      var product = req.body;\n      var productId = req.params.productId;\n      _product2.default.updateById(productId, product).then(function (result) {\n        hr.send(result);\n      }).catch(function (reason) {\n        hr.error(reason);\n      });\n    }\n  }, {\n    key: 'getProductById',\n    value: function getProductById(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      var productId = req.params.productId;\n      _product2.default.getProductById(productId).then(function (result) {\n        hr.send(result);\n      }).catch(function (reason) {\n        hr.error(reason);\n      });\n    }\n  }, {\n    key: 'getProductsByOrganizationId',\n    value: function getProductsByOrganizationId(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      var organizationId = req.params.organizationId;\n      if (!organizationId) {\n        return hr.error('organizationId is required', 422);\n      }\n      _product2.default.getProductsByOrganizationId(organizationId).then(function (result) {\n        hr.send(result);\n      }).catch(function (reason) {\n        hr.error(reason);\n      });\n    }\n  }, {\n    key: 'getProductByOrganizationId',\n    value: function getProductByOrganizationId(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      var organizationId = req.params.organizationId;\n      var productId = req.params.productId;\n      if (!organizationId) {\n        return hr.error('organizationId is required', 422);\n      }\n      if (!productId) {\n        return hr.error('productId is required', 422);\n      }\n      _product2.default.getProductByOrganizationId(organizationId, productId).then(function (result) {\n        hr.send(result);\n      }).catch(function (reason) {\n        hr.error(reason);\n      });\n    }\n  }]);\n\n  return ProductController;\n}();\n\nexports.default = ProductController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controllers/product.controller.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/controllers/product.controller.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _pmx = __webpack_require__(3);\n\nvar _pmx2 = _interopRequireDefault(_pmx);\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nvar _express3 = __webpack_require__(14);\n\nvar _express4 = _interopRequireDefault(_express3);\n\nvar _routes = __webpack_require__(20);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _logger = __webpack_require__(4);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nprocess.env.NODE_ENV = process.env.NODE_ENV || 'development';\n\n_pmx2.default.init({\n  http: true, // HTTP routes logging (default: true)\n  ignore_routes: [/socket\\.io/, /notFound/], // Ignore http routes with this pattern (Default: [])\n  errors: true, // Exceptions loggin (default: true)\n  custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics\n  network: true, // Network monitoring at the application level\n  ports: true // Shows which ports your app is listening on (default: false)\n});\n\nvar app = (0, _express2.default)();\n// const server = http.createServer(app)\n(0, _express4.default)(app);\n(0, _routes2.default)(app);\n\n// Start server\nvar server = app.listen(_environment2.default.port, _environment2.default.ip, function () {\n  _mongoose2.default.connect(_environment2.default.mongo.uri, _environment2.default.mongo.options, function (error) {\n    if (error) {\n      return _logger2.default.error(error);\n    }\n    _logger2.default.info('Connected to database');\n  });\n  _logger2.default.info('pu-product listening on ' + _environment2.default.port + ', in ' + app.get('env') + ' mode');\n});\n\nprocess.on('exit', function (cb) {\n  _mongoose2.default.connection.close();\n  console.log('bye......');\n});\n\nexports.default = server;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/app.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"path\"\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"lodash\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Development specific configuration\n// ==================================\nvar mongoHost = process.env.TDUSER_MONGO_HOST || 'pu-dev-shard-00-00-4nodg.mongodb.net:27017,pu-dev-shard-00-01-4nodg.mongodb.net:27017,pu-dev-shard-00-02-4nodg.mongodb.net:27017';\nmodule.exports = {\n  port: process.env.PORT || 9007,\n  mongo: {\n    uri: 'mongodb://' + mongoHost + '/develop',\n    prefix: 'pu_product_',\n    options: {\n      user: 'pudevelop',\n      pass: 'xEbiMFBtX48ObFgC',\n      ssl: true,\n      replicaSet: 'pu-dev-shard-0',\n      authSource: 'admin',\n      autoIndex: false, // Don't build indexes\n      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect\n      reconnectInterval: 1000, // Reconnect every 500ms\n      poolSize: 5 // Maintain up to 10 socket connections\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/development.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/development.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/production.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/production.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Test specific configuration\n// ===========================\n\nvar mongoHost = process.env.TDUSER_MONGO_HOST || 'pu-dev-shard-00-00-4nodg.mongodb.net:27017,pu-dev-shard-00-01-4nodg.mongodb.net:27017,pu-dev-shard-00-02-4nodg.mongodb.net:27017';\n\nmodule.exports = {\n  // MongoDB connection options\n  mongo: {\n    uri: 'mongodb://' + mongoHost + '/testing',\n    prefix: 'pu_product_',\n    options: {\n      user: 'pudevelop',\n      pass: 'xEbiMFBtX48ObFgC',\n      ssl: true,\n      replicaSet: 'pu-dev-shard-0',\n      authSource: 'admin',\n      autoIndex: false, // Don't build indexes\n      reconnectTries: 2, // Never stop trying to reconnect\n      reconnectInterval: 1000, // Reconnect every 500ms\n      poolSize: 1 // Maintain up to 10 socket connections\n    }\n  },\n  nodePass: {\n    me: {\n      token: 'tdschedule-secret'\n    }\n  },\n  logger: {\n    logName: 'pu-product-test-log'\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/environment/test.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/environment/test.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (app) {\n  app.use((0, _compression2.default)());\n  app.use(_bodyParser2.default.urlencoded({ extended: false }));\n  app.use(_bodyParser2.default.json());\n  app.use((0, _methodOverride2.default)());\n  app.use((0, _cookieParser2.default)());\n  app.use(pmx.expressErrorHandler());\n  app.use(function (req, res, next) {\n    var msg = 'database connection status ' + _mongoose2.default.connection.readyState;\n    if (_mongoose2.default.connection.readyState !== 1) {\n      _logger2.default.critical(msg);\n      return res.status(500).json(msg);\n    }\n    next();\n  });\n};\n\nvar _compression = __webpack_require__(15);\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _bodyParser = __webpack_require__(16);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _methodOverride = __webpack_require__(17);\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nvar _cookieParser = __webpack_require__(18);\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _logger = __webpack_require__(4);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Express configuration\n */\n\nvar pmx = __webpack_require__(3);\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/config/express.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/config/express.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"compression\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"body-parser\"\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"method-override\"\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"cookie-parser\"\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

eval("module.exports = require(\"@google-cloud/logging\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"@google-cloud/logging\"\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22@google-cloud/logging%22?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (app) {\n  // Insert routes below\n  app.use('/api/v1', _api2.default);\n\n  app.route('/*').get(function (request, response) {\n    response.status(200).json({ PU: 'Product!!!' });\n  });\n};\n\nvar _api = __webpack_require__(21);\n\nvar _api2 = _interopRequireDefault(_api);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/routes.js\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/routes.js?");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _organization = __webpack_require__(22);\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nvar _product = __webpack_require__(32);\n\nvar _product2 = _interopRequireDefault(_product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.use('/organization', _organization2.default);\nrouter.use('/product', _product2.default);\n\nexports.default = router;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/index.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/index.js?");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(5);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _controllers = __webpack_require__(24);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n// import controllers from '@/controllers'\n\nrouter.post('/request', _auth2.default.isAuthenticated(), _controllers.OrganizationController.organizationRequest);\nrouter.get('/response/:id', _auth2.default.isAuthenticated(), _controllers.OrganizationController.organizationResponse);\nrouter.put('/response/:id/:paymentId', _auth2.default.isAuthenticated(), _controllers.OrganizationController.organizationResponseUpdate);\nrouter.get('/:organizationId', _auth2.default.isAuthenticated(), _controllers.OrganizationController.getOrganization);\n\nrouter.get('/:organizationId/products', _auth2.default.isAuthenticated(), _controllers.ProductController.getProductsByOrganizationId);\nrouter.get('/:organizationId/product/:productId', _auth2.default.isAuthenticated(), _controllers.ProductController.getProductByOrganizationId);\n\nexports.default = router;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/organization/index.js\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/organization/index.js?");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

eval("module.exports = require(\"composable-middleware\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"composable-middleware\"\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22composable-middleware%22?");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _organization = __webpack_require__(25);\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nvar _product = __webpack_require__(7);\n\nvar _product2 = _interopRequireDefault(_product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  OrganizationController: _organization2.default,\n  ProductController: _product2.default\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controllers/index.js\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _organization = __webpack_require__(26);\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nvar _handlerResponse = __webpack_require__(6);\n\nvar _handlerResponse2 = _interopRequireDefault(_handlerResponse);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar OrganizationCotroller = function () {\n  function OrganizationCotroller() {\n    _classCallCheck(this, OrganizationCotroller);\n  }\n\n  _createClass(OrganizationCotroller, null, [{\n    key: 'organizationRequest',\n    value: function organizationRequest(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      _organization2.default.organizationRequest(req.body.userId, req.body.organizationInfo).then(function (organization) {\n        return hr.send({ organizationId: organization._id });\n      }).catch(function (reason) {\n        return hr.error(reason);\n      });\n    }\n  }, {\n    key: 'organizationResponse',\n    value: function organizationResponse(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      _organization2.default.organizationResponse(req.params.id).then(function (organization) {\n        if (!organization) {\n          return hr.error({ name: 'ValidationError', message: 'organization does not exists', errors: 'organization does not exists or was processed' }, 400);\n        }\n        return hr.send(organization);\n      }).catch(function (reason) {\n        return hr.error(reason);\n      });\n    }\n  }, {\n    key: 'organizationResponseUpdate',\n    value: function organizationResponseUpdate(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      _organization2.default.organizationResponseUpdate(req.params.id, req.params.paymentId).then(function (organization) {\n        if (!organization) {\n          return hr.error({ name: 'ValidationError', message: 'organization was processed', errors: 'organization does not exists or was processed' }, 400);\n        }\n        return hr.send(organization);\n      }).catch(function (reason) {\n        return hr.error(reason);\n      });\n    }\n  }, {\n    key: 'getOrganization',\n    value: function getOrganization(req, res) {\n      var hr = new _handlerResponse2.default(res);\n      _organization2.default.getOrganization(req.params.organizationId).then(function (organization) {\n        return hr.send(organization);\n      }).catch(function (reason) {\n        return hr.error(reason);\n      });\n    }\n  }]);\n\n  return OrganizationCotroller;\n}();\n\nexports.default = OrganizationCotroller;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/controllers/organization.controller.js\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/controllers/organization.controller.js?");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _organizationModel = __webpack_require__(27);\n\nvar _organizationModel2 = _interopRequireDefault(_organizationModel);\n\nvar _ncryp = __webpack_require__(28);\n\nvar _ncryp2 = _interopRequireDefault(_ncryp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar OrganizationService = function () {\n  function OrganizationService() {\n    _classCallCheck(this, OrganizationService);\n  }\n\n  _createClass(OrganizationService, null, [{\n    key: 'organizationRequest',\n    value: function organizationRequest(userId, dataOrganization) {\n      dataOrganization.ownerId = userId;\n      dataOrganization.aba = _ncryp2.default.encryptField(dataOrganization.aba);\n      dataOrganization.dda = _ncryp2.default.encryptField(dataOrganization.dda);\n      dataOrganization.ownerSSN = _ncryp2.default.encryptField(dataOrganization.ownerSSN);\n      return _organizationModel2.default.save(dataOrganization).then(function (data) {\n        return data;\n      });\n    }\n  }, {\n    key: 'organizationResponse',\n    value: function organizationResponse(organizationId) {\n      return _organizationModel2.default.findById(organizationId).then(function (organization) {\n        return organization;\n      });\n    }\n  }, {\n    key: 'organizationResponseUpdate',\n    value: function organizationResponseUpdate(organizationId, paymentId, cb) {\n      var query = { _id: organizationId };\n      var val = { verify: 'done', aba: '', dda: '', ownerSSN: '', paymentId: paymentId };\n      return _organizationModel2.default.updateById(query, val).then(function (data) {\n        return data;\n      });\n    }\n  }, {\n    key: 'getOrganization',\n    value: function getOrganization(_id) {\n      return _organizationModel2.default.findById(_id).then(function (organization) {\n        return organization;\n      });\n    }\n  }]);\n\n  return OrganizationService;\n}();\n\nexports.default = OrganizationService;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/services/organization.service.js\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/services/organization.service.js?");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar schema = new _mongoose2.default.Schema({\n  ownerId: { type: String },\n  ownerFirstName: { type: String, required: true }, // required //email //newDesign\n  ownerLastName: { type: String, required: true }, // required //email //newDesign\n  ownerDOB: { type: Date }, // required //email //newDesign\n  ownerSSN: { type: String, required: true }, // required //email //newDesign\n  ownerEmail: { type: String }, // email //response\n  ownerPhone: { type: String }, // email\n  country: { type: String, default: 'US' }, // required //email //response\n  state: { type: String, required: true }, // required //email //newDesign\n  city: { type: String, required: true }, // required //email //newDesign\n  zipCode: { type: String, required: true }, // required //newDesign\n  averagePayment: { type: String, default: '1' }, // email\n  EIN: { type: String }, // required //email //newDesign\n  Address: { type: String, required: true }, // required //email //newDesign\n  AddressLineTwo: { type: String }, // required //email //newDesign\n  website: { type: String, default: 'https://www.getpaidup.com' }, // email\n  businessName: { type: String, required: true }, // required //email //newDesign\n  businessType: { type: String, required: true }, // required //newDesign\n  aba: { type: String, required: true }, // required //email //response //newDesign\n  dda: { type: String, required: true }, // required //email //response //newDesign\n  createAt: { type: Date, default: new Date() },\n  updateAt: { type: Date, default: new Date() },\n  verify: { type: String, default: 'pending' },\n  referralCode: { type: String, default: '' }, // email\n  paymentId: { type: String, default: '' },\n  seasons: { type: [String], default: [] }\n});\n\nvar Model = _mongoose2.default.model('organization', schema, _environment2.default.mongo.prefix + 'organizations');\n\n/* 0*\n* Pre-save hook\n*/\n\nschema.pre('save', function (next) {\n  if (!this.isNew) return next();\n  this.update_at = new Date();\n  next();\n});\n\nvar OrganizationModel = function () {\n  function OrganizationModel() {\n    _classCallCheck(this, OrganizationModel);\n  }\n\n  _createClass(OrganizationModel, null, [{\n    key: 'save',\n    value: function save(org) {\n      return new Promise(function (resolve, reject) {\n        try {\n          var organization = new Model(org);\n          organization.save(function (err, data) {\n            if (err) {\n              return reject(err);\n            }\n            return resolve(data);\n          });\n        } catch (error) {\n          return reject(error);\n        }\n      });\n    }\n  }, {\n    key: 'findOne',\n    value: function findOne(filter) {\n      console.log('Filter: ', filter);\n      return new Promise(function (resolve, reject) {\n        Model.findOne(filter, function (err, data) {\n          if (err) return reject(err);\n          resolve(data);\n        });\n      });\n    }\n  }, {\n    key: 'updateById',\n    value: function updateById(id, value) {\n      return new Promise(function (resolve, reject) {\n        Model.findByIdAndUpdate(id, value, { new: true }, function (err, data) {\n          if (err) return reject(err);\n          resolve(data);\n        });\n      });\n    }\n  }, {\n    key: 'findById',\n    value: function findById(_id) {\n      return Model.findById(_id).exec();\n    }\n  }]);\n\n  return OrganizationModel;\n}();\n\nexports.default = OrganizationModel;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/models/organization.model.js\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/models/organization.model.js?");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _blind = __webpack_require__(29);\n\nvar _blind2 = _interopRequireDefault(_blind);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _class = function () {\n  function _class() {\n    _classCallCheck(this, _class);\n  }\n\n  _createClass(_class, null, [{\n    key: 'encryptField',\n    value: function encryptField(value) {\n      var encrypted = new _blind2.default({ encryptKey: _environment2.default.encryptKey }).encrypt(value);\n      return encrypted;\n    }\n  }, {\n    key: 'decryptField',\n    value: function decryptField(encryptedValue) {\n      var decrypted = new _blind2.default({ encryptKey: _environment2.default.encryptKey }).decrypt(encryptedValue);\n      return decrypted;\n    }\n  }]);\n\n  return _class;\n}();\n\nexports.default = _class;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/util/ncryp.js\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/util/ncryp.js?");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

eval("module.exports = require(\"blind\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"blind\"\n// module id = 29\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22blind%22?");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _product = __webpack_require__(31);\n\nvar _product2 = _interopRequireDefault(_product);\n\nvar _mongoose = __webpack_require__(1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ObjectId = _mongoose.Types.ObjectId;\n\nvar productService = function () {\n  function productService() {\n    _classCallCheck(this, productService);\n  }\n\n  _createClass(productService, null, [{\n    key: 'save',\n    value: function save(product) {\n      return _product2.default.save(product).then(function (product) {\n        return product;\n      });\n    }\n  }, {\n    key: 'updateById',\n    value: function updateById(id, product) {\n      var values = { $set: product };\n      return _product2.default.updateById(id, values).then(function (product) {\n        return product;\n      });\n    }\n  }, {\n    key: 'getProductById',\n    value: function getProductById(productId) {\n      return _product2.default.findById(productId).then(function (product) {\n        return product;\n      });\n    }\n  }, {\n    key: 'getProductsByOrganizationId',\n    value: function getProductsByOrganizationId(organizationId) {\n      return _product2.default.find({ organizationId: organizationId }).then(function (products) {\n        return products;\n      });\n    }\n  }, {\n    key: 'getProductByOrganizationId',\n    value: function getProductByOrganizationId(organizationId, productId) {\n      var fileter = {\n        _id: new ObjectId(productId),\n        organizationId: organizationId\n      };\n      return _product2.default.findOne(fileter).then(function (product) {\n        return product;\n      });\n    }\n  }]);\n\n  return productService;\n}();\n\nexports.default = productService;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/services/product.service.js\n// module id = 30\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/services/product.service.js?");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _environment = __webpack_require__(0);\n\nvar _environment2 = _interopRequireDefault(_environment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar formData = {\n  model: { type: String, required: true },\n  value: { type: String, required: true }\n};\n\nvar formTemplate = {\n  type: { type: String, required: true },\n  placeholder: { type: String, required: true },\n  name: { type: String, required: true },\n  model: { type: String, required: true },\n  displayed: { type: Boolean, required: true },\n  required: { type: Boolean, required: true }\n};\n\nvar processingFees = {\n  cardFeeActual: { type: Number, required: true },\n  cardFeeDisplay: { type: Number, required: true },\n  cardFeeFlatActual: { type: Number, required: true },\n  cardFeeFlatDisplay: { type: Number, required: true },\n  achFeeActual: { type: Number, required: true },\n  achFeeDisplay: { type: Number, required: true },\n  achFeeFlatActual: { type: Number, required: true },\n  achFeeFlatDisplay: { type: Number, required: true },\n  achFeeCapActual: { type: Number, required: true },\n  achFeeCapDisplay: { type: Number, required: true }\n};\n\nvar collectionsFee = {\n  fee: { type: Number, required: true },\n  feeFlat: { type: Number, required: true }\n};\n\nvar paysFees = {\n  processing: { type: Boolean, required: true },\n  collections: { type: Boolean, required: true }\n};\n\nvar geojson = {\n  type: { type: String, required: true, default: 'Point' },\n  coordinates: { type: [Number], required: true }\n};\n\nvar schema = new _mongoose2.default.Schema({\n  paymentId: { type: String, required: true }, //\n  season: { type: String, required: true }, //\n  organizationId: { type: String, required: true }, //\n  organizationName: { type: String, required: true }, //\n  organizationLocation: { type: String, required: true }, //\n  sku: { type: String, required: true }, //\n  name: { type: String, required: true }, //\n  description: { type: String, required: true }, //\n  startAt: { type: Date, required: true }, //\n  endAt: { type: Date, required: true }, //\n  location: { type: String, required: true }, //\n  geojson: { type: geojson }, //\n  visibility: { type: Boolean, required: true, default: true }, //\n  status: { type: Boolean, required: true, default: true }, //\n  image: { type: String, required: true }, //\n  categories: { type: [String] }, //\n  relatedProducts: { type: [String] }, //\n  statementDescriptor: { type: String, required: true }, //\n  customInfo: {\n    formData: { type: [formData], required: true },\n    formTemplate: { type: [formTemplate], required: true }\n  }, //\n  processingFees: { type: processingFees, required: true }, //\n  collectionsFee: { type: collectionsFee, required: true }, //\n  paysFees: { type: paysFees, required: true },\n  created: { type: Date, required: true, default: Date.now }, //\n  updated: { type: Date, required: true, default: Date.now //\n  } });\nvar Model = _mongoose2.default.model('product', schema, _environment2.default.mongo.prefix + 'products');\n\nschema.pre('save', function (next) {\n  if (this.isNew) this.updated = Date.now;else {\n    this.created = Date.now;\n  }\n  next();\n});\n\nvar ProductModel = function () {\n  function ProductModel() {\n    _classCallCheck(this, ProductModel);\n  }\n\n  _createClass(ProductModel, null, [{\n    key: 'save',\n    value: function save(prod) {\n      return new _mongoose.Promise(function (resolve, reject) {\n        try {\n          var product = new Model(prod);\n          product.save(function (err, data) {\n            if (err) {\n              return reject(err);\n            }\n            return resolve(data);\n          });\n        } catch (error) {\n          return reject(error);\n        }\n      });\n    }\n  }, {\n    key: 'find',\n    value: function find(filter) {\n      return new _mongoose.Promise(function (resolve, reject) {\n        Model.find(filter, function (err, data) {\n          if (err) return reject(err);\n          resolve(data);\n        });\n      });\n    }\n  }, {\n    key: 'findOne',\n    value: function findOne(filter) {\n      return new _mongoose.Promise(function (resolve, reject) {\n        Model.findOne(filter, function (err, data) {\n          if (err) return reject(err);\n          resolve(data);\n        });\n      });\n    }\n  }, {\n    key: 'findById',\n    value: function findById(_id) {\n      return Model.findById(_id).exec();\n    }\n  }, {\n    key: 'updateById',\n    value: function updateById(id, value) {\n      return new _mongoose.Promise(function (resolve, reject) {\n        Model.findByIdAndUpdate(id, value, { new: true }, function (err, data) {\n          if (err) return reject(err);\n          resolve(data);\n        });\n      });\n    }\n  }]);\n\n  return ProductModel;\n}();\n\nexports.default = ProductModel;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/models/product.model.js\n// module id = 31\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/models/product.model.js?");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(2);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(5);\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _product = __webpack_require__(7);\n\nvar _product2 = _interopRequireDefault(_product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.post('/', _auth2.default.isAuthenticated(), _product2.default.save);\nrouter.get('/:productId', _auth2.default.isAuthenticated(), _product2.default.getProductById);\nrouter.put('/:productId', _auth2.default.isAuthenticated(), _product2.default.updateById);\n\nexports.default = router;\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/api/product/index.js\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/api/product/index.js?");

/***/ })
/******/ ]);