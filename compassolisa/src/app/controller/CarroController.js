const CarroService = require('../service/CarroService');
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
    }
    
    
}

module.exports = new CarroController();