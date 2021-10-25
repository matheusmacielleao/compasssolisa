const { Router } = require('express');
const carro = require('../routes/carro.router')
const pessoa = require('../routes/pessoa.router')

module.exports = server => {
    server.use((req, res, next) => {
        carro(server, new Router());
        pessoa(server, new Router());
        next();
    });
}