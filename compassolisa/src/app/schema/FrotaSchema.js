const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const FrotaSchema = mongoose.Schema({
  id_carro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carro',
    required: true
  },
  id_locadora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locadora',
    required: true
  },
  status: {
    type: String,
    required: true
  },
  valor_diaria: {
    type: Number,
    required: true
  },
  placa: {
    type: String,
    unique: true,
    required: true
  }
});

FrotaSchema.plugin(mongoosePaginate);

const Frota = mongoose.model('Frota', FrotaSchema, 'Frota');

module.exports = Frota;
