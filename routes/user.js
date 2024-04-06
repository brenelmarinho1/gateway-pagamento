const express = require('express');
const MySchema = require('../models/myschema');
const router = express.Router();

router.get('/user/profile', async (req, res) => {
    // Perfil do Usuário
    // Endpoint para visualizar o perfil do usuário.
    try {
        const data = await MySchema.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/user/profile/update', async (req, res) => {
    // Atualizar Perfil do Usuário
    // Endpoint para atualizar o perfil do usuário.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.delete('/user/profile/delete', async (req, res) => {
    // Excluir Perfil do Usuário
    // Endpoint para excluir o perfil do usuário.
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await MySchema.findByIdAndDelete(
            id, updatedData, options
        );

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/user/password/update', async (req, res) => {
    // Atualizar Senha do Usuário
    // Endpoint para atualizar a senha do usuário.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.post('/user/avatar/upload', async (req, res) => {
    // Enviar Avatar do Usuário
    // Endpoint para enviar um novo avatar para o usuário.
    const data = new MySchema({});

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

router.delete('/user/avatar/delete', async (req, res) => {
    // Excluir Avatar do Usuário
    // Endpoint para excluir o avatar do usuário.
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await MySchema.findByIdAndDelete(
            id, updatedData, options
        );

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

