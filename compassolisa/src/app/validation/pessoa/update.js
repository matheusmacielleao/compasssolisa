const Joi = require('joi');
const moment = require('moment');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string(),
      cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
      data_nascimento: Joi.date(),
      email: Joi.string().regex(/.+\@.+\..+/),
      senha: Joi.string().min(6),
      habilitado: Joi.string().valid('sim', 'não')
    });
    const { error } = await schema.validate(req.body, { abortEarlY: true });
    if (Math.floor(moment(new Date()).diff(moment(req.body.data_nascimento), 'years', true)) < 18) {
      return res.status(400).json('menores de idade não permitidos');
    }

    // testar cpf
    let Soma;
    let Resto;
    Soma = 0;
    let strCPF = req.body.cpf;
    strCPF = strCPF.replace('-', '').replace('.', '').replace('.', '');
    if (strCPF == '00000000000') return res.status(400).json('Cpf Invalido');

    for (i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return res.status(400).json('Cpf Invalido');

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return res.status(400).json('Cpf Invalido');
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
