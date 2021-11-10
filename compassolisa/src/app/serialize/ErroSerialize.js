const ErroSerialize = (error) => {
  let { description } = error;
  let name = error.message;

  // eslint-disable-next-line no-prototype-builtins
  if (Object.prototype.hasOwnProperty(error, 'details')) {
    const { message, ...resto } = error.details[0];
    const descri = resto.context.key;
    name = message;
    description = descri;
  }
  return { description, name };
};

module.exports = ErroSerialize;
