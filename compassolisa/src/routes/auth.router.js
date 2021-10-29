const AuthController = require('../app/controller/AuthController.js');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
    routes.post('/',AuthController.authenticate);
    server.use(prefix, routes);
}

