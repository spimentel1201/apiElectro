import {Schema,model} from 'mongoose'

const invoiceSchema = new Schema({
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
},{
    timestamps: true,
    versionKey: false
})

export default model('Invoice', invoiceSchema)