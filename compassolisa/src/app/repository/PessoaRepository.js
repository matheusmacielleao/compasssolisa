const PessoaSchema = require('../schema/PessoaSchema');
const Conflito_Dados = require('../errors/ConflitoDados');
const PessoaNaoExiste = require('../errors/PessoaNaoExiste');

class PessoaRepository {
  async create(payload) {
    const checkCpfEmail = await this.find({ cpf: payload.cpf, email: payload.email });
    if (checkCpfEmail.docs.length > 0) {
      throw new Conflito_Dados();
    }
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
    const exist = await this.findById(_id);
    if (!exist) {
      throw new PessoaNaoExiste();
    }
    const checkCpfEmail = await this.find({ cpf: payload.cpf, email: payload.email });
    if (
      checkCpfEmail.docs.length > 0 &&
      checkCpfEmail.docs[0].cpf !== payload.cpf &&
      checkCpfEmail.docs[0].email !== payload.email
    ) {
      throw new Conflito_Dados();
    }
    return PessoaSchema.findOneAndUpdate({ _id }, payload, { new: true });
  }
}

module.exports = new PessoaRepository();
