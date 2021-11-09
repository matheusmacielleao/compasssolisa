const { Router } = require('express');
const carro = require('./carro.router');
const pessoa = require('./pessoa.router');
const auth = require('./auth.router');
const locadora = require('./locadora.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    carro(server, new Router());
    pessoa(server, new Router());
    auth(server, new Router());
    locadora(server, new Router());

    next();
  });
};
