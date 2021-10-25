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
    async find() {
        try {
            const result = await CarroRepository.find();
            return result;
        } catch (error) {
            return error;
        }
    }
    async delete(payload) {
        try {
            const result = await CarroRepository.delete(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    async findById(payload) {
        try {
            const result = await CarroRepository.findById(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    
}

module.exports = new CarroService();