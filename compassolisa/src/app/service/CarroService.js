const CarroRepository = require('../repository/CarroRepository');
const mongoose = require('mongoose');

class CarroService {
    async create(payload) {
        try {
            const result = await CarroRepository.create(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    async find(payload) {
        try {
            const result = await CarroRepository.find(payload);
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
    async update(id,payload) {
        try {
            const result = await CarroRepository.update(id,payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    
}

module.exports = new CarroService();