const LocadoraSchema = require('../schema/LocadoraSchema');
const axios = require('axios').default;

class LocadoraRepository {
    async create(payload) {
        for (let i = 0; i < payload.endereco.length; i++) {
            console.log(payload.endereco[i].cep);
            let busca = await axios.get(`https://viacep.com.br/ws/${payload.endereco[i].cep}/json`).then(function (response) {
                return response.data;
            });
            let { logradouro, complemento, bairro, localidade, uf, ...resto } = busca;
            payload.endereco[i].logradouro = logradouro;
            payload.endereco[i].complemento = complemento;
            payload.endereco[i].bairro = bairro;
            payload.endereco[i].localidade = localidade;
            payload.endereco[i].uf = uf;
        }
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