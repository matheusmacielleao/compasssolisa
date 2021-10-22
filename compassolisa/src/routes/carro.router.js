const CarroController = require('../app/controller/CarroController.js');
const createValidation = require('../app/validation/carro/create');
const CarroSchema = require('../app/schema/CarroSchema');


module.exports = (server, routes, prefix = '/carro') => {
    routes.post('/', createValidation,CarroController.create);
    routes.get('/', CarroController.find);
    routes.delete('/:id', CarroController.delete);
    server.use(prefix, routes);
}

