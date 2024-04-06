const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.get('/conversion/rates', async (req, res) => {
    // Obter Taxas de Conversão de Moeda
    // Endpoint para obter as taxas de conversão de moeda atualizadas.
    try {
        const data = await MySchema.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/conversion/convert', async (req, res) => {
    // Converter Valor de uma Moeda para Outra
    // Endpoint para converter um determinado valor de uma moeda para outra.
    const data = new MySchema({valor: req.body.valor, moeda_origem: req.body.moeda_origem, moeda_destino: req.body.moeda_destino});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

