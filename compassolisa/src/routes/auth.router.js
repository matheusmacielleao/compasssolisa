const AuthController = require('../app/controller/AuthController.js');

module.exports = (server, routes, prefix = '/authenticate') => {
    routes.post('/',AuthController.authenticate);
    server.use(prefix, routes);
}

