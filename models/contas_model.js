const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    codigo: {
        required: true,
        type: String
    },
    saldo: {
        required: true,
        type: Number
    },
    chave: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Contas', dataSchema)