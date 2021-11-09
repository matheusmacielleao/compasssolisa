const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarroSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  quantidadePassageiros: {
    type: Number,
    required: true
  },
  acessorios: [
    {
      descricao: {
        type: String,
        required: true
      }
    }
  ]
});

CarroSchema.plugin(mongoosePaginate);

const Carro = mongoose.model('Carro', CarroSchema, 'Carro');

module.exports = Carro;
