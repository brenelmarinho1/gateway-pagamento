const mongoose = require('mongoose');

const avataruploadresponseSchema = new mongoose.Schema({
    url: {
        
        type: string
    },
})

module.exports = mongoose.model('AvatarUploadResponse', avataruploadresponseSchema)
