class ConflitoUsuario extends Error {
  constructor() {
    super(`NÃO é permitida mais de uma reserva no mesmo período pelo mesmo usuário`);
    this.description = 'data_inicio/data_fim';
    this.name = 'NÃO é permitida mais de uma reserva no mesmo período pelo mesmo usuário';
  }
}

module.exports = ConflitoUsuario;
