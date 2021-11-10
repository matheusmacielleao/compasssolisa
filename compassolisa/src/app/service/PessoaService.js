const moment = require('moment');
const MenorDeIdade = require('../errors/MenorDeIdade');
const PessoaRepository = require('../repository/PessoaRepository');

class PessoaService {
  async create(payload) {
    if (Math.floor(moment(new Date()).diff(moment(payload.data_nascimento), 'years', true)) < 18) {
      throw new MenorDeIdade();
    }
    const result = await PessoaRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await PessoaRepository.find(payload);
    return result;
  }

  async delete(payload) {
    const result = await PessoaRepository.delete(payload);
    return result;
  }

  async findById(payload) {
    const result = await PessoaRepository.findById(payload);
    return result;
  }

  async update(id, payload) {
    if (Math.floor(moment(new Date()).diff(moment(payload.data_nascimento), 'years', true)) < 18) {
      throw new MenorDeIdade();
    }
    const result = await PessoaRepository.update(id, payload);
    return result;
  }
}

module.exports = new PessoaService();
