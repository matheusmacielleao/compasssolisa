const Joi = require('joi');
const ErroSerialize = require('../../serialize/ErroSerialize');
const { regexId } = require('../../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      id_carro: Joi.array().items(Joi.string().regex(regexId()).required()),
      status: Joi.string().required(),
      valor_diaria: Joi.number().required(),
      id_locadora: Joi.array().items(Joi.string().regex(regexId()).required()),
      placa: Joi.string().required()
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
