const Joi = require('joi').extend(require('@joi/date'));
const ErroSerialize = require('../../serialize/ErroSerialize');
const { regexCpf } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cpf: Joi.string().regex(regexCpf()).required(),
      data_nascimento: Joi.date().format('DD/MM/YYYY').required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(),
      habilitado: Joi.string().valid('sim', 'não').required()
    });
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
