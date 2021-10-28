const CarroController = require('../app/controller/CarroController.js');
const createValidation = require('../app/validation/carro/create');
const idValidation = require('../app/validation/idValidation.js');
const CarroSchema = require('../app/schema/CarroSchema');


module.exports = (server, routes, prefix = '/car') => {
    routes.post('/', createValidation,CarroController.create);
    routes.get('/', CarroController.find);
    routes.get('/:id',idValidation,CarroController.findById);
    routes.delete('/:id', idValidation,CarroController.delete);
    routes.put('/:id',idValidation,createValidation,CarroController.update);
    server.use(prefix, routes);
}

