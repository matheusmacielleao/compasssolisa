const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
    async create(payload) {
        return CarroSchema.create(payload);
    }
    async list() {
        return CarroSchema.find();
    }
}

module.exports = new CarroRepository();