const serialize = ({ _id, modelo, cor, ano, quantidadePassageiros, acessorios }) => ({
  _id,
  modelo,
  cor,
  ano,
  quantidadePassageiros,
  acessorios
});

const paginateSerialize = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
  carros: docs.map(serialize),
  limit,
  total: totalDocs,
  offset: pagingCounter,
  offsets: totalPages
});

module.exports = { serialize, paginateSerialize };
