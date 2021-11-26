const { paginateSerialize, serialize } = require('../serialize/FrotaSerialize');
const FrotaService = require('../service/FrotaService');

class FrotaController {
  async create(req, res) {
    try {
      const result = await FrotaService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async find(req, res) {
    try {
      const result = await FrotaService.find(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      await FrotaService.delete(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req, res) {
    try {
      const result = await FrotaService.findById(req.params.id);
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
      const result = await FrotaService.update(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new FrotaController();
