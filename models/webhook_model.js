const mongoose = require('mongoose');

const webhookSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    payload: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    // Outros campos relacionados ao webhook, como data, status, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Webhook', webhookSchema);
