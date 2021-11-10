const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, authConfig.secret);
    req.usuario = decode;
    return next();
  } catch (error) {
    return res.status(401).send({ description: 'Login', message: 'Login Falhou' });
  }
};
