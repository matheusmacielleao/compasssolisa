const mongoose = require('mongoose');

const PessoaSchema = mongoose.Schema({
    nome: String,
    cpf : String,
    data_nascimento :Date,
    email : String,
    senha : String,
    habilitado : Boolean

})

const Pessoa = mongoose.model('Pessoa', PessoaSchema);

module.exports = Pessoa;