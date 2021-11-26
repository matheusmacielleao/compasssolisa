const PlacaRepetida = require('../errors/PlacaRepetida');
const FrotaSchema = require('../schema/FrotaSchema');

class FrotaRepository {
  async create(payload) {
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

  async delete(payload) {
    return FrotaSchema.findByIdAndRemove({ _id: payload });
  }

  async findById(payload) {
    return FrotaSchema.findById(payload);
  }

  async update(_id, payload) {
    return FrotaSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }
}

module.exports = new FrotaRepository();
