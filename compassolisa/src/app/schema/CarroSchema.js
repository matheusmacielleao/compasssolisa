const mongoose = require('mongoose');

const CarroSchema = mongoose.Schema({
    modelo: String,
    cor: String,
    ano: Number,
    quantidadePassageiros: Number,
    acessorios : {descricao : String}

})

const Carro = mongoose.model('Carro', CarroSchema);

module.exports = Carro;