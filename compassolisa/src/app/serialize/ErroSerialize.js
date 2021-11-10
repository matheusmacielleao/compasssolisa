const ErroSerialize = (error) => error.details.map((detail) => ({
    description: detail.message,
    name: detail.path.join('.')
  }));

module.exports = ErroSerialize;
