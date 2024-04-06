const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.get('/transaction/details/:transaction_id', async (req, res) => {
    // Detalhes da Transação
    // Endpoint para obter os detalhes de uma transação específica.
    try {
        const data = await MySchema.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/transaction/cancel/:transaction_id', async (req, res) => {
    // Cancelar Transação
    // Endpoint para cancelar uma transação específica.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/transaction/refund/:transaction_id', async (req, res) => {
    // Solicitar Estorno
    // Endpoint para solicitar o estorno de uma transação.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/transaction/refund/status/:refund_id', async (req, res) => {
    // Verificar Status do Estorno
    // Endpoint para verificar o status de um estorno.
    try {
        const data = await MySchema.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

