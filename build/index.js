"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var host = '0.0.0.0';
var port = process.env.PORT || 5000;

_app["default"].listen(port, host);

console.log("Server listen on port", 5000);