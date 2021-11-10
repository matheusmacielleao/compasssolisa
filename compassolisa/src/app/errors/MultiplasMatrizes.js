class MultiplasMatrizes extends Error {
  constructor() {
    super(`Só é permetido uma Matriz!`);
    this.description = 'endereco';
    this.name = 'Só é permetida uma Matriz!';
  }
}

module.exports = MultiplasMatrizes;
