const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PessoaSchema = mongoose.Schema({
    nome: String,
    cpf : String,
    data_nascimento :Date,
    email : {type :String,
        required: true,
        unique: true
    },
    senha : String,
    habilitado : String

})

PessoaSchema.plugin(mongoosePaginate);

const Pessoa = mongoose.model('Pessoa', PessoaSchema,"Pessoa");

module.exports = Pessoa;