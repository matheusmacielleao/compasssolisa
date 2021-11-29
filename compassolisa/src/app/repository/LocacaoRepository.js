const moment = require('moment');
const LocacaoSchema = require('../schema/LocacaoSchema');
const FrotaSchema = require('../schema/FrotaSchema');
const ConflitoUsuario = require('../errors/ConflitoUsuario');
const ConflitoCarro = require('../errors/ConflitoCarro');

class LocacaoRepository {
  async create(idRental, payload) {
    const carro = await FrotaSchema.findById({ _id: payload.id_carro });
    const inicio = moment(payload.data_inicio);
    const fim = moment(payload.data_fim);
    const duration = moment.duration(fim.diff(inicio));
    const days = duration.asDays();

    const conflitoUsuario = await LocacaoSchema.findOne({
      id_user: payload.id_user,
      $or: [
        {
          data_inicio: {
            $gte: payload.data_inicio,
            $lte: payload.data_fim
          }
        },
        {
          data_fim: {
            $gte: payload.data_inicio,
            $lte: payload.data_fim
          }
        }
      ]
    });

    if (conflitoUsuario) {
      throw new ConflitoUsuario();
    }
    const conflitoCarro = await LocacaoSchema.findOne({
      "id_carro": payload.id_carro,
      $or: [
        {
          data_inicio: {
            $gte: payload.data_inicio,
            $lte: payload.data_fim
          }
        },
        {
          data_fim: {
            $gte: payload.data_inicio,
            $lte: payload.data_fim
          }
        }
      ]
    });

    if (conflitoCarro) {
      throw new ConflitoCarro();
    }

    payload.valor_final = days * carro.valor_diaria;

    return LocacaoSchema.create(payload);
  }

  async find(payload) {
    const { page = 1, limit = 100, ...query } = payload;
    return LocacaoSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async delete(idRental, payload) {
    return LocacaoSchema.findOneAndDelete({ _id: payload, id_locadora: idRental });
  }

  async findById(idRental, payload) {
    return LocacaoSchema.findOne({ _id: payload, id_locadora: idRental });
  }

  async update(idRental, _id, payload) {
    return LocacaoSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }
}

module.exports = new LocacaoRepository();
