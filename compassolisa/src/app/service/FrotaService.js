const FrotaRepository = require('../repository/FrotaRepository');

class FrotaService {
  async create(idRental, payload) {
    const result = await FrotaRepository.create(idRental, payload);
    return result;
  }

  async find(idRental, payload) {
    payload.id_locadora = idRental;
    const result = await FrotaRepository.find(payload);
    return result;
  }

  async delete(idRental, payload) {
    const result = await FrotaRepository.delete(idRental, payload);
    return result;
  }

  async findById(idRental, payload) {
    const result = await FrotaRepository.findById(idRental, payload);
    return result;
  }

  async update(idRental, id, payload) {
    const result = await FrotaRepository.update(idRental, id, payload);
    return result;
  }
}

module.exports = new FrotaService();
