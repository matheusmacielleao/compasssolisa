const PessoaRepository = require('../repository/PessoaRepository');
const moment = require('moment');

class PessoaService {
    
    async create(payload) {
        const result = await PessoaRepository.create(payload);
        return result;
    }

    async find(payload) {
        const result = await PessoaRepository.find(payload);
        return result;
    }

    async delete(payload) {
        const result = await PessoaRepository.delete(payload);
        return result;    
    }

    async findById(payload) {
        const result = await PessoaRepository.findById(payload);
        return result;       
    }

    async update(id, payload) {   
        const result = await PessoaRepository.update(id, payload);
        return result;     
    }

}

module.exports = new PessoaService();