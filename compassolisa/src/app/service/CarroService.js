const CarroRepository = require('../repository/CarroRepository');

class CarroService {
  async create(payload) {
    const result = await CarroRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await CarroRepository.find(payload);
    return result;
  }

  async delete(payload) {
    const result = await CarroRepository.delete(payload);
    return result;
  }

  async findById(payload) {
    const result = await CarroRepository.findById(payload);
    return result;
  }

  async update(id, payload) {
    const result = await CarroRepository.update(id, payload);
    return result;
  }

  async patchAcessorio(idCarro, idAcessorio, payload) {
    const result = await CarroRepository.patchAcessorio(idCarro, idAcessorio, payload);
    return result;
  }

}

module.exports = new CarroService();
