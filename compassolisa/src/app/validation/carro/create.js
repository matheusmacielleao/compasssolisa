const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            modelo: Joi.string().required(),
            cor: Joi.string().required(),
            ano: Joi.number().integer().min(1950).max(2022).required(),
            acessorios :Joi.array().unique().min(1).items({descricao: Joi.string()}).required(),
            quantidadePassageiros: Joi.number().required()
        });

        schema.acessorios
        const { error } = await schema.validate(req.body, { abortEarl: true });
        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}