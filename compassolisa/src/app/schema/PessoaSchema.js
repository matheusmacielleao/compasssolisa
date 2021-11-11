const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
    select: false
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

PessoaSchema.pre('save', async function encrypted(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

PessoaSchema.plugin(mongoosePaginate);

const Pessoa = mongoose.model('Pessoa', PessoaSchema, 'Pessoa');

module.exports = Pessoa;
