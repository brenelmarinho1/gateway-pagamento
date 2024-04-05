const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    },
    // Outros campos da transação, como detalhes, data, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Transaction', transactionSchema);
