const MultiplasMatrizes = require('../errors/MultiplasMatrizes');
const LocadoraRepository = require('../repository/LocadoraRepository');

class LocadoraService {
  async create(payload) {
    let matrizCounter = 0;
    payload.endereco.forEach((endereco) => {
      if (!endereco.isFilial) {
        matrizCounter += 1;
      }
      if (matrizCounter > 1) {
        throw new MultiplasMatrizes();
      }
    });
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
