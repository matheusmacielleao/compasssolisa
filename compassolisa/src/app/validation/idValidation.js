const Joi = require('joi');
const ErroSerialize = require('../serialize/ErroSerialize');
const { regexId } = require('../utils/regex');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      _id: Joi.string().regex(regexId()).required()
    });

    const { error } = await schema.validate({ _id: req.params }, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(ErroSerialize(error));
  }
};
