const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    // Outros campos relacionados à moeda, como código, taxa de câmbio, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('Currency', currencySchema);
