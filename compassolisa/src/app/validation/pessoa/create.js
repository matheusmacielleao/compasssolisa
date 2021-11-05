const Joi = require('joi');
const moment = require('moment');


module.exports = async (req, res, next) => {
    try {
        const schema = Joi.object({
            nome: Joi.string().trim().required(),
            cpf: Joi.string().regex().required(),
            data_nascimento: Joi.date().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).required(),
            habilitado: Joi.string().valid('sim','não').required()
        });
        const { error } = await schema.validate(req.body, { abortEarlY: true });
        if (error) throw error
        //if (Math.floor(moment(new Date()).diff(moment(req.body.data_nascimento), 'years', true)) < 18) {
          //  return res.status(400).json("menores de idade não permitidos");
        //}
        
        // testar cpf
        var Soma;
        var Resto;
        Soma = 0;
        var strCPF = req.body.cpf;
        strCPF = strCPF.replace("-", "").replace(".", "").replace(".", "");
        if (strCPF == "00000000000") return res.status(400).json("Cpf Invalido");

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return res.status(400).json("Cpf Invalido");

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return res.status(400).json("Cpf Invalido");
        return next();

        
    } catch (error) {
        return res.status(400).json(error);
    }
}