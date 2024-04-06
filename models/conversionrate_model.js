const mongoose = require('mongoose');

const conversionrateSchema = new mongoose.Schema({
    moeda_origem: {
        
        type: string
    },
    moeda_destino: {
        
        type: string
    },
    taxa: {
        
        type: number
    },
})

module.exports = mongoose.model('ConversionRate', conversionrateSchema)
