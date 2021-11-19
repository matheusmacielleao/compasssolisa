const moment = require('moment');
const CpfJaCadastrado = require('../errors/CpfJaCadastrado');
const EmailJaCadastrado = require('../errors/EmailJaCadastrado');
const PessoaNaoExiste = require('../errors/PessoaNaoExiste');
const PessoaRepository = require('../repository/PessoaRepository');
const regras = require('../utils/regras');

class PessoaService {
  async create(payload) {
    payload.data_nascimento = moment(payload.data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
    regras(payload);
    const checkCpf = await PessoaRepository.find({ cpf: payload.cpf });
    if (checkCpf.docs.length > 0) {
      throw new CpfJaCadastrado();
    }
    const checkEmail = await PessoaRepository.find({ email: payload.email });
    if (checkEmail.docs.length > 0) {
      throw new EmailJaCadastrado();
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
    payload.data_nascimento = moment(payload.data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const exist = await this.findById(id);
    if (!exist) {
      throw new PessoaNaoExiste();
    }
    regras(payload);
    const checkCpf = await PessoaRepository.find({ cpf: payload.cpf });
    if (checkCpf.docs.length > 0 && checkCpf.docs[0].cpf !== payload.cpf) {
      throw new CpfJaCadastrado();
    }
    const checkEmail = await PessoaRepository.find({ email: payload.email });
    if (checkEmail.docs.length > 0 && checkEmail.docs[0].email !== payload.email) {
      throw new EmailJaCadastrado();
    }
    const result = await PessoaRepository.update(id, payload);
    return result;
  }
}

module.exports = new PessoaService();
