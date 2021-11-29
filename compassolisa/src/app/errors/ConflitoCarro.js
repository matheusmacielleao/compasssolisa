class ConflitoCarro extends Error {
  constructor() {
    super(`Não é permitido mais de uma reserva do mesmo carro no mesmo dia`);
    this.description = 'data_inicio/data_fim/id_carro';
    this.name = 'Não é permitido mais de uma reserva do mesmo carro no mesmo dia';
  }
}

module.exports = ConflitoCarro;
