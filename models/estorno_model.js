const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    status: {
        type: String,
        enum: ['requested', 'processed'],
        default: 'requested'
    },
    // Outros campos do estorno, como motivo, data, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Refund', refundSchema);
