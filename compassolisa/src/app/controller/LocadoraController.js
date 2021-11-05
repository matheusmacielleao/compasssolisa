const { paginateSerialize, serialize } = require('../serialize/LocadoraSerialize');
const LocadoraService = require('../service/LocadoraService');
const axios = require('axios').default;

class LocadoraController {
    async create(req, res) {
        req.body.endereco = axios.get('https://viacep.com.br/ws/96205380/json')
            .then(function (response) {
                console.log(response);
            });
        const result = await LocadoraService.create(req.body);
        return res.status(201).json(serialize(result))
    }
    async find(req, res) {
        const result = await LocadoraService.find(req.query);
        return res.status(200).json(paginateSerialize(result))
    }
    async delete(req, res) {
        await LocadoraService.delete(req.params.id);
        return res.status(204).json({});
    }
    async findById(req, res) {
        const result = await LocadoraService.findById(req.params.id);
        if (result == null) {
            return res.status(404).json(result);
        }
        return res.status(201).json(serialize(result));
    }
    async update(req, res) {
        const result = await LocadoraService.update(req.params.id, req.body);
        return res.status(200).json(serialize(result))
    }


}

module.exports = new LocadoraController();