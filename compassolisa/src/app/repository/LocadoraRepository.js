const LocadoraSchema = require('../schema/LocadoraSchema');
const axios = require('axios').default;

class LocadoraRepository {
    async create(payload) {
        payload.endereco = payload.endereco.map(async (endereco)=>{
            let busca = await axios.get('https://viacep.com.br/ws/96205380/json').then(function (response) {
                return response.data;
            });
            let { logradouro, complemento, bairro, localidade, uf,...resto} = busca; 
            endereco.logradouro = logradouro;
            endereco.complemento = complemento;
            endereco.bairro = bairro;
            endereco.localidade = localidade;
            endereco.uf = uf;
            return endereco;
        });
        return  LocadoraSchema.create(payload);
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