const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/2fa', controller.enable2FA);

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

module.exports = router;
