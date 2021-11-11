const moment = require('moment');
const CpfInvalido = require('../errors/CpfInvalido');
const CpfJaCadastrado = require('../errors/CpfJaCadastrado');
const EmailJaCadastrado = require('../errors/EmailJaCadastrado');
const MenorDeIdade = require('../errors/MenorDeIdade');
const PessoaRepository = require('../repository/PessoaRepository');

class PessoaService {
  async create(payload) {
    this.check(payload);
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
    this.check(payload);
    const result = await PessoaRepository.update(id, payload);
    return result;
  }

  check(payload) {
    
    if (Math.floor(moment(new Date()).diff(moment(payload.data_nascimento), 'years', true)) < 18) {
      throw new MenorDeIdade();
    }
    const strCPF = payload.cpf.replace('.', '').replace('.', '').replace('-', '');
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF === '00000000000') throw new CpfInvalido();

    for (let i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10), 10)) throw new CpfInvalido();

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11), 10)) throw new CpfInvalido();
  }
}

module.exports = new PessoaService();
