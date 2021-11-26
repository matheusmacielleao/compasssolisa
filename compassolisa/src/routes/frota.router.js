const FrotaController = require('../app/controller/FrotaController');
//const createValidation = require('../app/validation/frota/create');
///const updateValidation = require('../app/validation/frota/update');

const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental/:id/car') => {
  routes.post('/', FrotaController.create);
  routes.get('/', FrotaController.find);
  routes.get('/:id', idValidation, FrotaController.findById);
  routes.delete('/:id', idValidation, FrotaController.delete);
  routes.put('/:id', idValidation, FrotaController.update);
  server.use(prefix, routes);
};
