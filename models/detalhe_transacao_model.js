const mongoose = require('mongoose');

const transactionDetailSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    // Outros campos relacionados aos detalhes da transação, como itens comprados, informações do cliente, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('TransactionDetail', transactionDetailSchema);
