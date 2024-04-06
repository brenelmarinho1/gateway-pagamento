const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.post('/auth/login', async (req, res) => {
    // Autenticar Usuário
    // Endpoint para autenticar um usuário e gerar um token de acesso.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/auth/register', async (req, res) => {
    // Registrar Novo Usuário
    // Endpoint para registrar um novo usuário.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/auth/2fa', async (req, res) => {
    // Habilitar/Desabilitar Autenticação de Dois Fatores
    // Endpoint para habilitar ou desabilitar a autenticação de dois fatores.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

