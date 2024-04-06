const mongoose = require('mongoose');

const authrequestSchema = new mongoose.Schema({
    email: {
        
        type: string
    },
    senha: {
        
        type: string
    },
})

module.exports = mongoose.model('AuthRequest', authrequestSchema)
