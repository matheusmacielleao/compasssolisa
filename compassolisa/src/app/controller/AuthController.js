const PessoaSchema = require('../schema/PessoaSchema');
const jwt  =  require('jsonwebtoken');
const  authConfig = require("../../config/auth.json");
class AuthController {
    async authenticate(req, res) {
        const{email,senha} = req.body;
        const pessoa = await PessoaSchema.findOne({email});
        if(!pessoa){
            return res.status(400).json('Email não encontrado');
        }
        if(senha != pessoa.senha){
            return res.status(400).json('Senha invalida');
        }
        pessoa.senha = undefined;
        const habilitado = pessoa.habilitado;
        const token = jwt.sign({id: pessoa._id},authConfig.secret,{expiresIn: 86400});
        return res.status(201).json({email,habilitado,token});
    }
   
}

module.exports = new AuthController();