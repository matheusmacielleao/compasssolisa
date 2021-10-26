const CarroSchema = require('../schema/CarroSchema');
class CarroRepository {
    async create(payload) {
        return CarroSchema.create(payload);
    }
    async find($payload) {
        return CarroSchema.find($payload);
    }
    async delete(payload) {
        return CarroSchema.findByIdAndRemove({"_id":payload});
    }
    async findById(payload) {
        return CarroSchema.findById(payload);
    }
    async update(_id,payload) {
        return CarroSchema.findOneAndUpdate({_id},payload);
    }

}

module.exports = new CarroRepository();