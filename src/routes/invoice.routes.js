import {Router} from 'express'

const router = Router()
import * as invoicesCtrl from '../controllers/invoices.controller'
import {authJwt} from '../middlewares'
router.post('/',[authJwt.verifyToken,authJwt.isWorker], invoicesCtrl.createInvoice)
router.get('/', invoicesCtrl.getInvoices)
router.get('/:invoiceId', invoicesCtrl.getInvoiceById)
router.get('/code/:invoiceId', invoicesCtrl.getInvoiceByCodigo)
router.put('/:invoiceId',[authJwt.verifyToken,authJwt.isWorker],authJwt.verifyToken, invoicesCtrl.updateInvoiceById)
router.delete('/:invoiceId', [authJwt.verifyToken,authJwt.isWorker],invoicesCtrl.deleteInvoiceById)

export default router;