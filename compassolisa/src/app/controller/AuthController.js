const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PessoaSchema = require('../schema/PessoaSchema');

class AuthController {
  async authenticate(req, res) {
    try {
      const { email, senha } = req.body;
      const pessoa = await PessoaSchema.findOne({ email }).select('senha');
      if (!pessoa) {
        return res.status(400).json({ descripition: 'email', name: 'Email não encontrado' });
      }
      if (!bcrypt.compare(senha, pessoa.senha)) {
        return res.status(400).json({ descripition: 'senha', name: 'Senha invalida' });
      }
      pessoa.senha = undefined;
      const { habilitado } = pessoa;
      const token = jwt.sign({ id: pessoa._id }, process.env.SECRET, { expiresIn: 86400 });
      req.body.token = token;
      req.headers.authorization = `Bearer ${token}`;
      return res.status(201).json({ email, habilitado, token });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new AuthController();
