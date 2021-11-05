const { Router } = require('express');
const carro = require('../routes/carro.router')
const pessoa = require('../routes/pessoa.router')
const auth = require('../routes/auth.router')
const locadora = require('../routes/locadora.router')



module.exports = (server) => {
    server.use((req, res, next) => {
        
        carro(server, new Router());
        pessoa(server, new Router());
        auth(server, new Router());
        locadora(server, new Router());

        next();
    });
}