const LocadoraController = require('../app/controller/LocadoraController.js');
//const createValidation = require('../app/validation/locadora/create');
//const updateValidation = require('../app/validation/locadora/update');

const idValidation = require('../app/validation/idValidation.js');
const LocadoraSchema = require('../app/schema/LocadoraSchema');


module.exports = (server, routes, prefix = '/api/v1/locadora') => {
    routes.post('/',LocadoraController.create);
    routes.get('/', LocadoraController.find);
    routes.get('/:id', idValidation, LocadoraController.findById);
    routes.delete('/:id', idValidation, LocadoraController.delete);
    routes.put('/:id', idValidation,LocadoraController.update);
    server.use(prefix, routes);
}
