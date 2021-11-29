const FrotaController = require('../app/controller/FrotaController');
const createValidation = require('../app/validation/frota/create');
///const updateValidation = require('../app/validation/frota/update');

const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/:idRental/car', FrotaController.create);
  routes.get('/:idRental/fleet', FrotaController.find);
  routes.get('/:idRental/fleet/:id', idValidation, FrotaController.findById);
  routes.delete('/:idRental/fleet/:id', idValidation, FrotaController.delete);
  routes.put('/:idRental/fleet/:id', idValidation, FrotaController.update);
  server.use(prefix, routes);
};
