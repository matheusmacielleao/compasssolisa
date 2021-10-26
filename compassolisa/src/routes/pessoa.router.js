const PessoaController = require('../app/controller/PessoaController.js');
const createValidation = require('../app/validation/pessoa/create');
const PessoaSchema = require('../app/schema/PessoaSchema');


module.exports = (server, routes, prefix = '/pessoa') => {
    routes.post('/', createValidation, PessoaController.create);
    routes.get('/', PessoaController.find);
    routes.get('/:id', PessoaController.findById);
    routes.delete('/:id', PessoaController.delete);
    routes.put('/:id',createValidation ,PessoaController.update);
    server.use(prefix, routes);
}

