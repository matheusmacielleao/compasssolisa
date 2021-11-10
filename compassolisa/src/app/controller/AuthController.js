const jwt = require('jsonwebtoken');
const PessoaSchema = require('../schema/PessoaSchema');
const authConfig = require('../../config/auth.json');

class AuthController {
  async authenticate(req, res) {
    const { email, senha } = req.body;
    const pessoa = await PessoaSchema.findOne({ email });
    if (!pessoa) {
      return res.status(400).json({descripition:"email",name:'Email não encontrado'});
    }
    if (senha !== pessoa.senha) {
      return res.status(400).json({descripition:"senha",name:'Senha invalida'});
    }
    pessoa.senha = undefined;
    const { habilitado } = pessoa;
    const token = jwt.sign({ id: pessoa._id }, authConfig.secret, { expiresIn: 86400 });
    req.body.token = token;
    req.headers.authorization = `Bearer ${token}`;
    return res.status(201).json({ email, habilitado, token });
  }
}

module.exports = new AuthController();
