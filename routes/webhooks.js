const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.post('/webhooks/handle', async (req, res) => {
    // Lidar com Eventos Recebidos por Webhooks
    // Endpoint para lidar com eventos recebidos por webhooks.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

