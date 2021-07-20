"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteInvoiceById = exports.updateInvoiceById = exports.getInvoiceById = exports.getInvoices = exports.createInvoice = void 0;

var _Invoice = _interopRequireDefault(require("../models/Invoice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createInvoice = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, codigo, nombresC, apellidosC, telefono, dni, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, estado, monto, imgURL, newInvoice, invoiceSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var invoices;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var invoice;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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

var updateInvoiceById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updateInvoice;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Invoice["default"].findByIdAndUpdate(req.params.invoiceId, req.body, {
              "new": true
            });

          case 2:
            updateInvoice = _context4.sent;
            res.status(200).json(updateInvoice);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateInvoiceById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateInvoiceById = updateInvoiceById;

var deleteInvoiceById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var invoiceId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            invoiceId = req.params.invoiceId;
            _context5.next = 3;
            return _Invoice["default"].findByIdAndDelete(invoiceId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteInvoiceById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteInvoiceById = deleteInvoiceById;