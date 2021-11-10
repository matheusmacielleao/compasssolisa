const Joi = require('joi');
const ErroSerialize = require('../../serialize/ErroSerialize');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().trim().required(),
      cor: Joi.string().trim().required(),
      ano: Joi.number().integer().min(1950).max(2022).required(),
      acessorios: Joi.array().unique().min(1).items({ descricao: Joi.string().trim() }).required(),
      quantidadePassageiros: Joi.number().required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: true });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
