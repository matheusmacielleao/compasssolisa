const { paginateSerialize, serialize } = require('../serialize/LocadoraSerialize');
const LocadoraService = require('../service/LocadoraService');

class LocadoraController {
  async create(req, res) {
    try {
      const result = await LocadoraService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async find(req, res) {
    try {
      const result = await LocadoraService.find(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      await LocadoraService.delete(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req, res) {
    try {
      const result = await LocadoraService.findById(req.params.id);
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
      const result = await LocadoraService.update(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new LocadoraController();
