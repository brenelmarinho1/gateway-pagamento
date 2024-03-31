const express = require('express');
const Model = require('../models/contas_model');
const router = express.Router();
const auth = require("../auth/auth");

//Post Method
router.post('/criar-conta', auth , async (req, res) => {
    const data = new Model({
        codigo: req.body.codigo,
        saldo: req.body.saldo,
        chave: req.body.chave
    })

    try {
        const oldUser = await Model.findOne({ 'chave': req.body.chave });

        if(oldUser){
            return res.status(409).send("User Already Exist. Please Login");
        }

        const dataToSave = await data.save();
        res.status(200).json("Informações salvas com sucesso - dataToSave")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll', auth, async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', auth, async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        if(result == null){
            res.status(500).json({ message: "Informação não encontrada. ", id: id  })    
        }else{
            res.send(result)
        }
        
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;