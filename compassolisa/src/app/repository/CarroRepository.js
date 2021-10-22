const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
    async create(payload) {
        return CarroSchema.create(payload);
    }
}

module.exports = new UserRepository();