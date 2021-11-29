const moment = require('moment');

const LocacaoRepository = require('../repository/LocacaoRepository');

class LocacaoService {
  async create(idRental, payload) {
    payload.data_inicio = moment(payload.data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD');
    payload.data_fim = moment(payload.data_fim, 'DD/MM/YYYY').format('YYYY-MM-DD');

    const result = await LocacaoRepository.create(idRental, payload);
    return result;
  }

  async find(idRental, payload) {
    payload.id_locadora = idRental;
    const result = await LocacaoRepository.find(payload);
    return result;
  }

  async delete(idRental, payload) {
    const result = await LocacaoRepository.delete(idRental, payload);
    return result;
  }

  async findById(idRental, payload) {
    const result = await LocacaoRepository.findById(idRental, payload);
    return result;
  }

  async update(idRental, id, payload) {
    payload.data_inicio = moment(payload.data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD');
    payload.data_fim = moment(payload.data_fim, 'DD/MM/YYYY').format('YYYY-MM-DD');

    const result = await LocacaoRepository.update(idRental, id, payload);
    return result;
  }
}

module.exports = new LocacaoService();
