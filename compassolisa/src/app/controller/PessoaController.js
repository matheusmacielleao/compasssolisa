const ErroSerialize = require('../serialize/ErroSerialize');
const { paginateSerialize, serialize } = require('../serialize/PessoaSerialize');

const PessoaService = require('../service/PessoaService');

class PessoaController {
  async create(req, res) {
    try {
      const result = await PessoaService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async find(req, res) {
    try {
      const result = await PessoaService.find(req.query);
      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(ErroSerialize(error));
    }
  }

  async delete(req, res) {
    try {
      await PessoaService.delete(req.params.id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json(ErroSerialize(error));
    }
  }

  async findById(req, res) {
    try {
      const result = await PessoaService.findById(req.params.id);
      if (result == null) {
        return res.status(404).json(result);
      }
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(ErroSerialize(error));
    }
  }

  async update(req, res) {
    try {
      const result = await PessoaService.update(req.params.id, req.body);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(ErroSerialize(error));
    }
  }
}

module.exports = new PessoaController();
