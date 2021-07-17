import {Router} from 'express'

const router = Router()
import * as invoicesCtrl from '../controllers/invoices.controller'
import {authJwt} from '../middlewares'
router.post('/',[authJwt.verifyToken,authJwt.isWorker], invoicesCtrl.createInvoice)
router.get('/', invoicesCtrl.getInvoices)
router.get('/:inoviceId', invoicesCtrl.getInvoiceById)
router.put('/:invoiceId',[authJwt.verifyToken,authJwt.isWorker],authJwt.verifyToken, invoicesCtrl.updateInvoiceById)
router.delete('/:invoiceId', [authJwt.verifyToken,authJwt.isWorker],invoicesCtrl.deleteInvoiceById)

export default router;