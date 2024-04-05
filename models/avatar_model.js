const mongoose = require('mongoose');

const avatarSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    // Outros campos relacionados ao avatar do usuário, como tamanho, tipo de arquivo, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Avatar', avatarSchema);
