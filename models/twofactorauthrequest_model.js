const mongoose = require('mongoose');

const twofactorauthrequestSchema = new mongoose.Schema({
    token: {
        
        type: string
    },
    opcao: {
        
        type: string
    },
})

module.exports = mongoose.model('TwoFactorAuthRequest', twofactorauthrequestSchema)
