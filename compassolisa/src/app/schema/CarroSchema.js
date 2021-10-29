const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarroSchema = mongoose.Schema({
    modelo: String,
    cor: String,
    ano: Number,
    quantidadePassageiros: Number,
    acessorios : [{descricao : String}]

})

CarroSchema.plugin(mongoosePaginate);

const Carro = mongoose.model('Carro', CarroSchema,"Carro");

module.exports = Carro;