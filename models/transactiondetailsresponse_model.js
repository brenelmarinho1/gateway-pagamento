const mongoose = require('mongoose');

const transactiondetailsresponseSchema = new mongoose.Schema({
    id: {
        
        type: string
    },
    valor: {
        
        type: number
    },
    status: {
        
        type: string
    },
    descricao: {
        
        type: string
    },
    data: {
        
        type: string
    },
})

module.exports = mongoose.model('TransactionDetailsResponse', transactiondetailsresponseSchema)
