const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'delivered', 'failed'],
        default: 'sent'
    },
    // Outros campos relacionados à notificação, como data, tipo, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Notification', notificationSchema);
