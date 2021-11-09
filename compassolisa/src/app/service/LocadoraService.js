const LocadoraRepository = require('../repository/LocadoraRepository');

class LocadoraService {
  async create(payload) {
    const result = await LocadoraRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await LocadoraRepository.find(payload);
    return result;
  }

  async delete(payload) {
    const result = await LocadoraRepository.delete(payload);
    return result;
  }

  async findById(payload) {
    const result = await LocadoraRepository.findById(payload);
    return result;
  }

  async update(id, payload) {
    const result = await LocadoraRepository.update(id, payload);
    return result;
  }
}

module.exports = new LocadoraService();
