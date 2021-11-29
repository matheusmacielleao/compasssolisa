const PlacaRepetida = require('../errors/PlacaRepetida');
const FrotaSchema = require('../schema/FrotaSchema');

class FrotaRepository {
  async create(idRental, payload) {
    const exists = await FrotaSchema.find({ placa: payload.placa });
    if (exists.length > 0) {
      throw new PlacaRepetida();
    }
    return FrotaSchema.create(payload);
  }

  async find(payload) {
    const { page = 1, limit = 100, ...query } = payload;
    return FrotaSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async delete(idRental, payload) {
    return FrotaSchema.findOneAndDelete({ _id: payload, id_locadora: idRental });
  }

  async findById(idRental, payload) {
    return FrotaSchema.findOne({ _id: payload, id_locadora: idRental });
  }

  async update(idRental, _id, payload) {
    return FrotaSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }
}

module.exports = new FrotaRepository();
