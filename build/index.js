"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var host = '0.0.0.0';
var port = process.env.PORT || 5000;

_app["default"].listen(port, host);

console.log("Server listen on port", port);