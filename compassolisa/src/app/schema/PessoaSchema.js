const mongoose = require('mongoose');

const PessoaSchema = mongoose.Schema({
    nome: String,
    cpf : String,
    data_nascimento :Date,
    email : String,
    senha : String,
    habilitado : String

})

const Pessoa = mongoose.model('Pessoa', PessoaSchema,"Pessoa");

module.exports = Pessoa;