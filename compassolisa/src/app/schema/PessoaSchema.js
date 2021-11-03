const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PessoaSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true 
    },
    data_nascimento: {
        type: Date,
        required: true
    },
    email : {type :String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    habilitado: {
        type: String,
        enum:['sim','não'],
        required: true
    }

})

PessoaSchema.plugin(mongoosePaginate);

const Pessoa = mongoose.model('Pessoa', PessoaSchema,"Pessoa");

module.exports = Pessoa;