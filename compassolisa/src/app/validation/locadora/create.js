const Joi = require('joi');
const ErroSerialize = require('../../serialize/ErroSerialize');
const { regexCpnj, regexCep } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cnpj: Joi.string().regex(regexCpnj()).required(),
      atividades: Joi.string().trim().required(),
      endereco: Joi.array()
        .min(1)
        .items({
          cep: Joi.string().regex(regexCep()).trim().required(),
          complemento: Joi.string().trim().optional(),
          number: Joi.number().required(),
          isFilial: Joi.boolean().required()
        })
        .required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
