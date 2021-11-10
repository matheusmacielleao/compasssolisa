const ErroSerialize = (error) => {
  let description = error.name;
  let name = error.message;

  if (error instanceof Error) {
    const { message } = error.details[0];
    const { descri } = error.details[0].context.key;
    name = message;
    description = descri;
  }
  return { description, name };
};

module.exports = ErroSerialize;
