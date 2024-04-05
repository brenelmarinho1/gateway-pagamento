const mongoose = require('mongoose');

const refundRequestSchema = new mongoose.Schema({
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
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    // Outros campos relacionados à solicitação de estorno, como data de solicitação, comentários do administrador, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('RefundRequest', refundRequestSchema);
