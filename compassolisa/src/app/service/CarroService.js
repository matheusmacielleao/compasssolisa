const CarroRepository = require('../repository/CarroRepository');

class CarroService {
    async create(payload) {
        try {
            const result = await CarroRepository.create(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
}

module.exports = new CarroService();