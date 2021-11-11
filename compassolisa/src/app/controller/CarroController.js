const { paginateSerialize, serialize } = require('../serialize/CarroSerialize');
const CarroService = require('../service/CarroService');

class CarroController {
  async create(req, res) {
    try {
      const result = await CarroService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async find(req, res) {
    try {
      const result = await CarroService.find(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      await CarroService.delete(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req, res) {
    try {
      const result = await CarroService.findById(req.params.id);
      if (result == null) {
        return res.status(404).json(result);
      }
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const result = await CarroService.update(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async patchAcessorio(req, res) {
    try {
      const result = await CarroService.patchAcessorio(req.params.idCarro, req.params.idAcessorio, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new CarroController();
