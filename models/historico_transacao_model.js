const mongoose = require('mongoose');

const transactionHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    // Outros campos relacionados ao histórico de transações, como data da ação, detalhes adicionais, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('TransactionHistory', transactionHistorySchema);
