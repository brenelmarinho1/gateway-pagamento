const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    descricao: {
        required: true,
        type: String
    },
    dataExtrato: {
        required: true,
        type: Date
    },
    valor: {
        required: true,
        type: Number
    },
    usuario: {
        required: true,
        type: String
    }
  
})

module.exports = mongoose.model('Extrato', dataSchema)
