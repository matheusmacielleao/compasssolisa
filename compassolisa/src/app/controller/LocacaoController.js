const { paginateSerialize, serialize } = require('../serialize/LocacaoSerialize');
const LocacaoService = require('../service/LocacaoService');

class LocacaoController {
  async create(req, res) {
    try {
      const result = await LocacaoService.create(req.params.idRental, req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async find(req, res) {
    try {
      const result = await LocacaoService.find(req.params.idRental, req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      const result = await LocacaoService.delete(req.params.idRental, req.params.id);
      if (!result) {
        return res.status(404).json({});
      }
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req, res) {
    try {
      const result = await LocacaoService.findById(req.params.idRental, req.params.id);
      if (result == null) {
        return res.status(404).json(result);
      }
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const result = await LocacaoService.update(req.params.idRental, req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new LocacaoController();
