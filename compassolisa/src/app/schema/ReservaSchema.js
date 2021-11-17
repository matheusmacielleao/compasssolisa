const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ReservaSchema = mongoose.Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pessoa'
  },
  data_inicio: {
    type: Date,
    required: true
  },
  data_fim: {
    type: Date,
    required: true
  },
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
  valor_final: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  }
});

ReservaSchema.plugin(mongoosePaginate);

const Reserva = mongoose.model('Reserva', ReservaSchema, 'Reserva');

module.exports = Reserva;
