const mongoose = require('mongoose');

const transactionCancellationDetailSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true,
        unique: true
    },
    cancelReason: {
        type: String
    },
    // Outros campos relacionados aos detalhes do cancelamento de transação, como data de cancelamento, responsável pelo cancelamento, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('TransactionCancellationDetail', transactionCancellationDetailSchema);
