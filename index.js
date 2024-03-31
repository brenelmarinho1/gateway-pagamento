require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');
const contas_routes = require('./routes/contas-route');
const login_routes = require('./routes/login-route');

app.use('/api', routes)
app.use('/contas', contas_routes)
app.use('/login', login_routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})