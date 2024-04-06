const mongoose = require('mongoose');

const errorresponseSchema = new mongoose.Schema({
    mensagem: {
        
        type: string
    },
})

module.exports = mongoose.model('ErrorResponse', errorresponseSchema)
