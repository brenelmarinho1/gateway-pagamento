const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.post('/notifications/send', async (req, res) => {
    // Enviar Notificação
    // Endpoint para enviar uma notificação.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/notification/send', async (req, res) => {
    // Enviar Notificação
    // Endpoint para enviar uma notificação para o usuário.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

