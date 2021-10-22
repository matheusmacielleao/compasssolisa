const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
    async create(payload) {
        return CarroSchema.create(payload);
    }
    async find() {
        return CarroSchema.find();
    }
}

module.exports = new CarroRepository();