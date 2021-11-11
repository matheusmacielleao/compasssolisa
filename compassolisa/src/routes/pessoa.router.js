const PessoaController = require('../app/controller/PessoaController');
const createValidation = require('../app/validation/pessoa/create');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', createValidation, PessoaController.create);
  routes.get('/', PessoaController.find);
  routes.get('/:id', PessoaController.findById);
  routes.delete('/:id', PessoaController.delete);
  routes.put('/:id', createValidation, PessoaController.update);
  server.use(prefix, routes);
};
