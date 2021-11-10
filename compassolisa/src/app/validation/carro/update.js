const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().optional(),
      cor: Joi.string().optional(),
      ano: Joi.number().integer().min(1950).max(2022).optional(),
      acessorios: Joi.array().unique().min(1).items({ descricao: Joi.string() }).optional(),
      quantidadePassageiros: Joi.number().optional()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
