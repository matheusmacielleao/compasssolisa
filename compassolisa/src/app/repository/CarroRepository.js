const CarroSchema = require('../schema/CarroSchema');

class CarroRepository {
    async create(payload) {
        return CarroSchema.create(payload);
    }
    async find() {
        return CarroSchema.find();
    }
    async delete(payload) {
        return CarroSchema.deleteOne({"_id":payload});
    }
    async findById(payload) {
        return CarroSchema.findById(payload);
    }

}

module.exports = new CarroRepository();