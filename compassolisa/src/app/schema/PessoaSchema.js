const mongoose = require('mongoose');
const crypto = require('crypto');
const mongoosePaginate = require('mongoose-paginate-v2');

const PessoaSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  data_nascimento: {
    type: Date,
    required: true
  },
  email: { type: String, required: true, unique: true },
  senha: {
    type: String,
    required: true,
    select: false,
    set: (value) => crypto.createHash('md5').update(value).digest('hex')
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

PessoaSchema.plugin(mongoosePaginate);

const Pessoa = mongoose.model('Pessoa', PessoaSchema, 'Pessoa');

module.exports = Pessoa;
