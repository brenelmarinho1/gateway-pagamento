const mongoose = require('mongoose');

const registerrequestSchema = new mongoose.Schema({
    nome: {
        
        type: string
    },
    email: {
        
        type: string
    },
    senha: {
        
        type: string
    },
})

module.exports = mongoose.model('RegisterRequest', registerrequestSchema)
