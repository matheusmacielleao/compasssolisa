const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
  async create(payload) {
    return CarroSchema.create(payload);
  }

  async find(payload) {
    const { page = 1, limit = 100, ...query } = payload;
    return CarroSchema.paginate(
      { ...query },
      { limit: Number(limit), page: Number(page), skip: (Number(page) - 1) * Number(limit) }
    );
  }

  async delete(payload) {
    return CarroSchema.findByIdAndRemove({ _id: payload });
  }

  async findById(payload) {
    return CarroSchema.findById(payload);
  }

  async update(_id, payload) {
    return CarroSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }

  async patchAcessorio(_id, idAcessorio, payload) {
    const result = await CarroSchema.findOneAndUpdate(
      { _id, 'acessorios._id': idAcessorio },
      {
        $set: {
          'acessorios.$.descricao': payload.descricao
        }
      },
      { new: true, safe: true, upsert: true }
    );
    return result;
  }
}

module.exports = new CarroRepository();
