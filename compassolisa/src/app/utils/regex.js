const regexCpnj = () => /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

const regexCpf = () => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const regexId = () => /[0-9a-fA-F]{24}/;

const regexCep = () => /^\d{5}-\d{3}$/;

module.exports = {
  regexCep,
  regexCpf,
  regexCpnj,
  regexId
};
