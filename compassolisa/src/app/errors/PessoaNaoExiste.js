class PessoaNaoExiste extends Error {
  constructor() {
    super(`O ID informado não pertence a nenhuma pessoa`);
    this.description = 'id';
    this.name = 'O ID informado não pertence a nenhuma pessoa';
  }
}

module.exports = PessoaNaoExiste;
