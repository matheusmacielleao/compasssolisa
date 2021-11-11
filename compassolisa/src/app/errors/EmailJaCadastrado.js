class EmailJaCadastrado extends Error {
  constructor() {
    super(`Email JaCadastrado!`);
    this.description = 'email';
    this.name = 'Email JaCadastrado!';
  }
}

module.exports = EmailJaCadastrado;
