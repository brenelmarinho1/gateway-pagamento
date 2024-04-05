const mongoose = require('mongoose');

const paymentDetailSchema = new mongoose.Schema({
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
    // Outros campos relacionados aos detalhes do pagamento, como método de pagamento, endereço de entrega, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('PaymentDetail', paymentDetailSchema);
