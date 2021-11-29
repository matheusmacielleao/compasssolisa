const { Router } = require('express');
const carro = require('./carro.router');
const pessoa = require('./pessoa.router');
const auth = require('./auth.router');
const locadora = require('./locadora.router');
const frota = require('./frota.router');

const locacao = require('./locacao.router');
const docs = require('./docs.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    docs(server, new Router());
    carro(server, new Router());
    pessoa(server, new Router());
    auth(server, new Router());
    locadora(server, new Router());
    locacao(server, new Router());
    frota(server, new Router());
    next();
  });
};
