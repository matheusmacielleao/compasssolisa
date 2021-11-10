const { paginateSerialize, serialize } = require('../serialize/CarroSerialize');
const CarroService = require('../service/CarroService');
<<<<<<< HEAD
const mongoosePaginate = require('mongoose-paginate-v2');

class CarroController {
    async create(req, res) {      
        const result = await CarroService.create(req.body);
        return res.status(201).json(result)
    }
    async find(req, res) {
        const result = await CarroService.find(req.query);
        return res.status(201).json(result)
    }
    async delete(req, res) {
        const result = await CarroService.delete(req.params.id);
        return res.status(204).json(result)
    }
    async findById(req, res) {
        const result = await CarroService.findById(req.params.id);
        if(result == null){
            return res.status(404).json(result);
        }
        return res.status(201).json(result);
    }
    async update(req, res) {
        const result = await CarroService.update(req.params.id,req.body);
        return res.status(200).json(result)
=======

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
>>>>>>> 5af20ef314abb8d9464b71d982f44ed5466a86a3
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
