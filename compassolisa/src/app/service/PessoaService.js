const PessoaRepository = require('../repository/PessoaRepository');

class PessoaService {
    async create(payload) {
        try {
            const result = await PessoaRepository.create(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    async find() {
        try {
            const result = await PessoaRepository.find();
            return result;
        } catch (error) {
            return error;
        }
    }
    async delete(payload) {
        try {
            const result = await PessoaRepository.delete(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    async findById(payload) {
        try {
            const result = await PessoaRepository.findById(payload);
            return result;
        } catch (error) {
            return error;
        }
    }
    async update(id, payload) {
        try {
            const result = await PessoaRepository.update(id, payload);
            return result;
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PessoaService();