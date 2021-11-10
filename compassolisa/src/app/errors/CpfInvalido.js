class CpfInvalido extends Error {
  constructor() {
    super(`Cpf Invalido!`);
    this.description = 'cpf';
    this.name = 'Cpf Invalido!';
  }
}

module.exports = CpfInvalido;
