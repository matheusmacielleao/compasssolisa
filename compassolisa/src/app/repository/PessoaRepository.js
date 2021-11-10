const PessoaSchema = require('../schema/PessoaSchema');

class PessoaRepository {
  async create(payload) {
    return PessoaSchema.create(payload);
  }

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
