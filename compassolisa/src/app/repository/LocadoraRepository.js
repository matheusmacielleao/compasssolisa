const LocadoraSchema = require('../schema/LocadoraSchema');
class LocadoraRepository {
    async create(payload) {
        return LocadoraSchema.create(payload);
    }
    async find(payload) {
        const { page = 1, limit = 100, ...query } = payload;
        return LocadoraSchema.paginate(
            { ...query },
            {
                limit: Number(limit),
                page: Number(page),
                skip: (Number(page) - 1) * Number(limit)
            });
    }
    async delete(payload) {
        return LocadoraSchema.findByIdAndRemove({ "_id": payload });
    }
    async findById(payload) {
        return LocadoraSchema.findById(payload);
    }
    async update(_id, payload) {
        return LocadoraSchema.findOneAndUpdate({ _id }, payload, { new: true });
    }

}

module.exports = new LocadoraRepository();