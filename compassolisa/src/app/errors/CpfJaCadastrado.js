class CpfJaCadastrado extends Error {
  constructor() {
    super(`Cpf JaCadastrado!`);
    this.description = 'cpf';
    this.name = 'Cpf JaCadastrado!';
  }
}

module.exports = CpfJaCadastrado;
