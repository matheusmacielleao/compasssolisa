class PlacaRepetida extends Error {
  constructor() {
    super(`Placa já resgistrada anteriormente no sistema.`);
    this.description = 'placa';
    this.name = 'Placa já resgistrada anteriormente no sistema.';
  }
}

module.exports = PlacaRepetida;
