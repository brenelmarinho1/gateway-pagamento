const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.post('/payment/transaction', async (req, res) => {
    // Iniciar Transação de Pagamento
    // Endpoint para iniciar uma nova transação de pagamento.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/payment/transaction/:transaction_id', async (req, res) => {
    // Verificar Status da Transação
    // Endpoint para verificar o status de uma transação.
    try {
        const data = await MySchema.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/payment/cancel', async (req, res) => {
    // Cancelar Transação Pendente
    // Endpoint para cancelar uma transação pendente.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

