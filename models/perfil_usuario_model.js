const mongoose = require('mongoose');

const userProfileDetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    address: {
        type: String,
        // Outros campos de detalhes do perfil, como telefone, endereço, etc., podem ser adicionados aqui
    }
});

module.exports = mongoose.model('UserProfileDetail', userProfileDetailSchema);
