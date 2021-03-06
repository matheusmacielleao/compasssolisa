const Joi = require('joi');
const ErroSerialize = require('../../serialize/ErroSerialize');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim(),
      cnpj: Joi.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/),
      atividades: Joi.string().trim(),
      endereco: Joi.array()
        .unique()
        .min(1)
        .items({
          cep: Joi.string()
            .regex(/^\d{5}-\d{3}$/)
            .trim()
            .required(),
          complemento: Joi.string().trim().optional(),
          number: Joi.number().required(),
          isFilial: Joi.boolean().required()
        })
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
