const mongoose = require('mongoose');

const conversionRateSchema = new mongoose.Schema({
    sourceCurrency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency',
        required: true
    },
    targetCurrency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency',
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    // Outros campos relacionados à taxa de conversão, como data de atualização, provedor, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('ConversionRate', conversionRateSchema);
