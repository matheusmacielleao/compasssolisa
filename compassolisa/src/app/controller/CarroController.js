const CarroService = require('../service/CarroService');

class CarroController {
    async create(req, res) {
        const result = await CarroService.create(req.body);
        return res.status(201).json(result)
    }
}

module.exports = new UserController();