const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
<<<<<<< HEAD
    async create(payload) {
        return CarroSchema.create(payload);
    }
    async find($payload) {
        return CarroSchema.find($payload);
    }
    async delete(payload) {
        return CarroSchema.findByIdAndRemove({"_id":payload});
    }
    async findById(payload) {
        return CarroSchema.findById(payload);
    }
    async update(_id,payload) {
        return CarroSchema.findOneAndUpdate({ _id }, payload, { new: true });
    }
=======
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
>>>>>>> 5af20ef314abb8d9464b71d982f44ed5466a86a3

  async patchAcessorio(_id, idAcessorio, payload) {
    const result = await CarroSchema.findOneAndUpdate(
      { 'acessorios._id': idAcessorio },
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
