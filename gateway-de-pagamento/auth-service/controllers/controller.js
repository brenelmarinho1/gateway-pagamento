const userService = require('../services/userService');
const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.login = async (email, password) => {
  try {
    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    // Verificar se a senha está correta
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error('Credenciais inválidas');
    }

    // Se as credenciais estiverem corretas, retorne o usuário
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};


exports.register = async (email, password) => {
  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error('O email já está em uso');
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};


exports.enable2FA = async (req, res) => {
  // Implementação para habilitar 2FA
};
