const mongoose = require('mongoose');

const webhookDetailSchema = new mongoose.Schema({
    webhookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Webhook',
        required: true,
        unique: true
    },
    endpoint: {
        type: String,
        required: true
    },
    // Outros campos de detalhes do webhook, como método, headers, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('WebhookDetail', webhookDetailSchema);
d
