const { Router } = require('express');
const carro = require('../routes/carro.router')
module.exports = server => {
    server.use((req, res, next) => {
        carro(server, new Router());
        next();
    });
}