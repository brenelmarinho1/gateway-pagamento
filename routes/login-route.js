const express = require('express');
const Model = require('../models/login_model');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//Post Method
router.post('/criar-usuario', async (req, res) => {
    console.log("O que chegou " + req.body);
    
    const data = new Model({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password,10),
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    })

    try {
        
        const oldUser = await Model.findOne({ 'email': req.body.email });

        if(oldUser){
            return res.status(409).send("User Already Exist. Please Login");
        }

        const dataToSave = await data.save();
        res.status(200).json("Informações salvas com sucesso")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.post('/login', async (req, res) => {
    try {
        const data = new Model({
            email: req.body.email,
            password:req.body.password            
        })
        
        // Validate if user exist in our database
        const user = await Model.findOne({ 'email': req.body.email });
    
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "15m",
            }
          );
    
          // save user token
          user.token = token;
          console.log(token);
    
          // user
          res.status(200).json(user);
        }else{
            res.status(400).send("Invalid Credentials");
        }
        

      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
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
router.delete('/delete/:id', async (req, res) => {
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
