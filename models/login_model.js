const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    nome: {
        required: false,
        type: String
    },
    sobrenome: {
        required: false,
        type: String
    },
    token: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Login', dataSchema)