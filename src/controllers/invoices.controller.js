import Invoice from '../models/Invoice'

export const createInvoice = async (req, res) => {
    
    const {codigo, nombresC, apellidosC, telefono, dni, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, estado, monto, imgURL} = req.body
    
    const newInvoice = new Invoice({codigo, nombresC, apellidosC, telefono, dni, direccion, artefacto, marca, modelo, serie, accesorios, descripcion, fechaing, estado, monto, imgURL});
    const invoiceSaved = await newInvoice.save()

    res.status(201).json(invoiceSaved)
}

export const getInvoices = async (req,res) => {
    const invoices = await Invoice.find();
    res.json(invoices)
}

export const getInvoiceById = async (req,res) => {
    const invoice = await Invoice.findById(req.params.invoiceId)
    res.status(200).json(invoice)
}

export const getInvoiceByCodigo = async (req,res) => {
    //const {invoicecode} = req.params;
    const invoice = await Invoice.find({codigo: req.params.invoiceId}).exec();
    console.log(invoice)
    res.status(200).json(invoice)
}

export const updateInvoiceById = async (req,res) => {
    const updateInvoice = await Invoice.findByIdAndUpdate(req.params.invoiceId, req.body, {
        new: true
    })
    res.status(200).json(updateInvoice)

}

export const deleteInvoiceById = async (req,res) => {
    const {invoiceId} = req.params;
    await Invoice.findByIdAndDelete(invoiceId)
    res.status(204).json()
}