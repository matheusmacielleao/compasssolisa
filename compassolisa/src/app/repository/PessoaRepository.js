const PessoaSchema = require('../schema/PessoaSchema');

class PessoaRepository {
    async create(payload) {
        return PessoaSchema.create(payload);
    }
    async find() {
        return PessoaSchema.find();
    }
    async delete(payload) {
        return PessoaSchema.deleteOne({ "_id": payload });
    }
    async findById(payload) {
        return PessoaSchema.findById(payload);
    }
    async update(_id, payload) {
        return PessoaSchema.findOneAndUpdate({ _id }, payload);
    }

}

module.exports = new PessoaRepository();