"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

const server = (0, _express.default)();
const dev = process.env.NODE_ENV !== 'production';
server.disable('x-powered-by');
server.use((0, _morgan.default)(dev ? 'dev' : 'combined')); // request logging. dev: console | production: file

server.use(_bodyParser.default.json()); // parse body params and attache them to req.body

server.use(_bodyParser.default.urlencoded({
  extended: true
}));
server.use((0, _compression.default)()); // gzip compression

server.use((0, _helmet.default)()); // secure apps by setting various HTTP headers

server.use((0, _cors.default)()); // enable CORS - Cross Origin Resource Sharing

var _default = server;
exports.default = _default;