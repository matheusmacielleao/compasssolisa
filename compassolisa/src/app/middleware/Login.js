const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.SECRET);
    req.usuario = decode;
    return next();
  } catch (error) {
    return res.status(401).send({ description: 'Login', message: 'Falha ao Logar' });
  }
};
