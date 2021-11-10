const LocadoraController = require('../app/controller/LocadoraController');
const createValidation = require('../app/validation/locadora/create');
// const updateValidation = require('../app/validation/locadora/update');

const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createValidation, LocadoraController.create);
  routes.get('/', LocadoraController.find);
  routes.get('/:id', idValidation, LocadoraController.findById);
  routes.delete('/:id', idValidation, LocadoraController.delete);
  routes.put('/:id', idValidation, LocadoraController.update);
  server.use(prefix, routes);
};
