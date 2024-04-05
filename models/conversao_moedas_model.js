const mongoose = require('mongoose');

const currencyConversionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
    amount: {
        type: Number,
        required: true
    },
    convertedAmount: {
        type: Number,
        required: true
    },
    // Outros campos relacionados à conversão de moeda, como taxa de câmbio utilizada, data da conversão, etc., podem ser adicionados aqui
});

module.exports = mongoose.model('CurrencyConversion', currencyConversionSchema);
