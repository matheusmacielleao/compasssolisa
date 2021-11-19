class ConflitoDados extends Error {
  constructor() {
    super(`email ou cpf já cadastrados no sistema!`);
    this.description = 'email/cpf';
    this.name = 'email ou cpf já cadastrados no sistema!';
  }
}

module.exports = ConflitoDados;
