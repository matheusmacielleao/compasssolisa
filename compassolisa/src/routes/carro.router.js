const CarroController = require('../app/controller/CarroController');
const createValidation = require('../app/validation/carro/create');
const updateValidation = require('../app/validation/carro/update');
const Login = require('../app/middleware/Login');
const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', createValidation, CarroController.create);
  routes.get('/', Login, CarroController.find);
  routes.patch('/:idCarro/acessorios/:idAcessorio', CarroController.patchAcessorio);
  routes.get('/:id', idValidation, CarroController.findById);
  routes.delete('/:id', idValidation, CarroController.delete);
  routes.put('/:id', idValidation, updateValidation, CarroController.update);
  server.use(prefix, routes);
};
