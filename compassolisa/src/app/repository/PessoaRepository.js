const PessoaSchema = require('../schema/PessoaSchema');

class PessoaRepository {
<<<<<<< HEAD
    async create(payload) {
        return PessoaSchema.create(payload);
    }
    async find($payload) {
        return PessoaSchema.find($payload);
    }
    async delete(payload) {
        return PessoaSchema.deleteOne({ "_id": payload });
    }
    async findById(payload) {
        return PessoaSchema.findById(payload);
    }
    async update(_id, payload) {
        return PessoaSchema.findOneAndUpdate({ _id }, payload, { new: true });
    }
=======
  async create(payload) {
    console.log(payload.cpf);
    return PessoaSchema.create(payload);
  }
>>>>>>> 5af20ef314abb8d9464b71d982f44ed5466a86a3

  async find(payload) {
    const { page = 1, limit = 100, ...query } = payload;
    return PessoaSchema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
  }

  async delete(payload) {
    return PessoaSchema.deleteOne({ _id: payload });
  }

  async findById(payload) {
    return PessoaSchema.findById(payload);
  }

  async update(_id, payload) {
    return PessoaSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }
}

module.exports = new PessoaRepository();
