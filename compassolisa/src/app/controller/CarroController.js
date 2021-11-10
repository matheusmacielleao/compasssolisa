const { paginateSerialize, serialize } = require('../serialize/CarroSerialize');
const CarroService = require('../service/CarroService');

class CarroController {
  async create(req, res) {
    const result = await CarroService.create(req.body);
    return res.status(201).json(serialize(result));
  }

  async find(req, res) {
    const result = await CarroService.find(req.query);
    return res.status(200).json(paginateSerialize(result));
  }

  async delete(req, res) {
    await CarroService.delete(req.params.id);
    return res.status(204).json({});
  }

  async findById(req, res) {
    const result = await CarroService.findById(req.params.id);
    if (result == null) {
      return res.status(404).json(result);
    }
    return res.status(201).json(serialize(result));
  }

  async update(req, res) {
    const result = await CarroService.update(req.params.id, req.body);
    return res.status(200).json(serialize(result));
  }

  async patchAcessorio(req, res) {
    const result = await CarroService.patchAcessorio(req.params.idCarro, req.params.idAcessorio, req.body);
    return res.status(200).json(result);
  }
}

module.exports = new CarroController();
