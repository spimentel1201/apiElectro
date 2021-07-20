"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var invoiceSchema = new _mongoose.Schema({
  codigo: Number,
  nombresC: String,
  apellidosC: String,
  telefono: Number,
  dni: Number,
  direccion: String,
  artefacto: String,
  marca: String,
  modelo: String,
  serie: String,
  accesorios: String,
  descripcion: String,
  fecha_ing: String,
  estado: String,
  monto: Number,
  imgURL: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Invoice', invoiceSchema);

exports["default"] = _default;