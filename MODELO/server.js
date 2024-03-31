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

// Rota de Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
