"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

_mongoose["default"].connect("mongodb+srv://epimentel:q1w2e3r4t5@@@cluster0.si6oy.mongodb.net/RestAPI_Electro?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});