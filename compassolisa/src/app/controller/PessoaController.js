const { paginateSerialize, serialize } = require('../serialize/PessoaSerialize');
const PessoaService = require('../service/PessoaService');

class PessoaController {
  async create(req, res) {
    const result = await PessoaService.create(req.body);
    return res.status(201).json(serialize(result));
  }

  async find(req, res) {
    const result = await PessoaService.find(req.query);
    return res.status(200).json(paginateSerialize(result));
  }

  async delete(req, res) {
    await PessoaService.delete(req.params.id);
    return res.status(204).json({});
  }

  async findById(req, res) {
    const result = await PessoaService.findById(req.params.id);
    if (result == null) {
      return res.status(404).json(result);
    }
    return res.status(201).json(serialize(result));
  }

  async update(req, res) {
    const result = await PessoaService.update(req.params.id, req.body);
    return res.status(200).json(serialize(result));
  }
}

module.exports = new PessoaController();
