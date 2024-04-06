const mongoose = require('mongoose');

const notificationrequestSchema = new mongoose.Schema({
    mensagem: {
        
        type: string
    },
})

module.exports = mongoose.model('NotificationRequest', notificationrequestSchema)
