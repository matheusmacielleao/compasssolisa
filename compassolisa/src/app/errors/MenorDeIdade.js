class MenorDeIdade extends Error {
  constructor() {
    super(`Só são aceitos maiores de 18 anos`);
    this.description = 'data_nascimento';
    this.name = 'Só são aceitos maiores de 18 anos';
  }
}

module.exports = MenorDeIdade;
