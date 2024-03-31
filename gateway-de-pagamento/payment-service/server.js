const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao MongoDB
connectDB();

// Rotas
app.use('/api', routes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
