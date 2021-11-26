const FrotaRepository = require('../repository/FrotaRepository');

class FrotaService {
  async create(payload) {
    const result = await FrotaRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await FrotaRepository.find(payload);
    return result;
  }

  async delete(payload) {
    const result = await FrotaRepository.delete(payload);
    return result;
  }

  async findById(payload) {
    const result = await FrotaRepository.findById(payload);
    return result;
  }

  async update(id, payload) {
    const result = await FrotaRepository.update(id, payload);
    return result;
  }
}

module.exports = new FrotaService();
