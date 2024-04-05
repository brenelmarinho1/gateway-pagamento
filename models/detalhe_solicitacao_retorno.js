const mongoose = require('mongoose');

const refundRequestDetailSchema = new mongoose.Schema({
    refundRequestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RefundRequest',
        required: true,
        unique: true
    },
    adminComments: {
        type: String
    },
    // Outros campos relacionados aos detalhes da solicitação de estorno, como data de aprovação/rejeição, motivo da rejeição, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('RefundRequestDetail', refundRequestDetailSchema);
