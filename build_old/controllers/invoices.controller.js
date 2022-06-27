"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteInvoiceById = exports.updateInvoiceById = exports.getInvoiceByCodigo = exports.getInvoiceById = exports.getInvoices = exports.createInvoice = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Invoice = _interopRequireDefault(require("../models/Invoice"));

var createInvoice = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, codigo, nombresC, apellidosC, telefono, dni, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, estado, monto, imgURL, newInvoice, invoiceSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, codigo = _req$body.codigo, nombresC = _req$body.nombresC, apellidosC = _req$body.apellidosC, telefono = _req$body.telefono, dni = _req$body.dni, direccion = _req$body.direccion, artefacto = _req$body.artefacto, marca = _req$body.marca, modelo = _req$body.modelo, serie = _req$body.serie, accesorios = _req$body.accesorios, descripcion = _req$body.descripcion, fechaing = _req$body.fechaing, estado = _req$body.estado, monto = _req$body.monto, imgURL = _req$body.imgURL;
            newInvoice = new _Invoice["default"]({
              codigo: codigo,
              nombresC: nombresC,
              apellidosC: apellidosC,
              telefono: telefono,
              dni: dni,
              direccion: direccion,
              artefacto: artefacto,
              marca: marca,
              modelo: modelo,
              serie: serie,
              accesorios: accesorios,
              descripcion: descripcion,
              fechaing: fechaing,
              estado: estado,
              monto: monto,
              imgURL: imgURL
            });
            _context.next = 4;
            return newInvoice.save();

          case 4:
            invoiceSaved = _context.sent;
            res.status(201).json(invoiceSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createInvoice(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createInvoice = createInvoice;

var getInvoices = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var invoices;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Invoice["default"].find();

          case 2:
            invoices = _context2.sent;
            res.json(invoices);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getInvoices(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getInvoices = getInvoices;

var getInvoiceById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var invoice;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Invoice["default"].findById(req.params.invoiceId);

          case 2:
            invoice = _context3.sent;
            res.status(200).json(invoice);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getInvoiceById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getInvoiceById = getInvoiceById;

var getInvoiceByCodigo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var invoice;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Invoice["default"].find({
              codigo: req.params.invoiceId
            }).exec();

          case 2:
            invoice = _context4.sent;
            console.log(invoice);
            res.status(200).json(invoice);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getInvoiceByCodigo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getInvoiceByCodigo = getInvoiceByCodigo;

var updateInvoiceById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var updateInvoice;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Invoice["default"].findByIdAndUpdate(req.params.invoiceId, req.body, {
              "new": true
            });

          case 2:
            updateInvoice = _context5.sent;
            res.status(200).json(updateInvoice);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateInvoiceById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateInvoiceById = updateInvoiceById;

var deleteInvoiceById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var invoiceId;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            invoiceId = req.params.invoiceId;
            _context6.next = 3;
            return _Invoice["default"].findByIdAndDelete(invoiceId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteInvoiceById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteInvoiceById = deleteInvoiceById;