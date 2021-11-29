const LocacaoController = require('../app/controller/LocacaoController');
//const createValidation = require('../app/validation/Locacao/create');
///const updateValidation = require('../app/validation/Locacao/update');

const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:idRental/reserve', LocacaoController.create);
  routes.get('/:idRental/reserve', LocacaoController.find);
  routes.get('/:idRental/reserve/:id', idValidation, LocacaoController.findById);
  routes.delete('/:idRental/reserve/:id', idValidation, LocacaoController.delete);
  routes.put('/:idRental/reserve/:id', idValidation, LocacaoController.update);
  server.use(prefix, routes);
};
