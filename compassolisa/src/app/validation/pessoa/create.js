const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().required(),
            cpf: Joi.string().required(),
            data_nascimento: Joi.date().required(),
            email: Joi.string().required(),
            senha: Joi.string().min(6).required(),
            habilitado: Joi.string().valid('sim','não').required()
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });
        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}