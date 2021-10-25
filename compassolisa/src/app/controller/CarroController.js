const CarroService = require('../service/CarroService');

class CarroController {
    async create(req, res) {
        const result = await CarroService.create(req.body);
        return res.status(201).json(result)
    }
    async find(req, res) {
        const result = await CarroService.find();
        return res.status(201).json(result)
    }
    async delete(req, res) {
        const result = await CarroService.delete(req.params.id);
        return res.status(204).json(result)
    }
    async findById(req, res) {
        const result = await CarroService.findById(req.params.id);
        return res.status(201).json(result)
    }
    
    
}

module.exports = new CarroController();