const CarroController = require('../app/controller/CarroController.js');
const createValidation = require('../app/validation/carro/create');
const CarroSchema = require('../app/schema/CarroSchema');


module.exports = (server, routes, prefix = '/carro') => {
    routes.post('/', createValidation,CarroController.create);
    routes.get('/', CarroController.find);
    routes.get('/:id', CarroController.findById);
    routes.delete('/:id', CarroController.delete);
    routes.put('/:id', CarroController.update);
    server.use(prefix, routes);
}

