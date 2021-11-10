const Joi = require('joi');
const moment = require('moment');
const ErroSerialize = require('../../serialize/ErroSerialize');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string(),
      cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      data_nascimento: Joi.date(),
      email: Joi.email(),
      senha: Joi.string().min(6),
      habilitado: Joi.string().valid('sim', 'não')
    });
    const { error } = await schema.validate(req.body, { abortEarlY: true });
    if (Math.floor(moment(new Date()).diff(moment(req.body.data_nascimento), 'years', true)) < 18) {
      return res.status(400).json('menores de idade não permitidos');
    }

    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
