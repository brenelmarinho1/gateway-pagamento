const mongoose = require('mongoose');

const transactionstatusresponseSchema = new mongoose.Schema({
    status: {
        
        type: string
    },
    valor: {
        
        type: number
    },
})

module.exports = mongoose.model('TransactionStatusResponse', transactionstatusresponseSchema)
