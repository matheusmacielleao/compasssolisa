const request = require('supertest');
const app = require('../src/app');
const PessoaSchema = require('../src/app/schema/PessoaSchema');

beforeAll(async () => {
  await PessoaSchema.deleteMany();
});

beforeEach(async () => {
  await PessoaSchema.deleteMany();
});

describe('criar Usuario', () => {
  it('retornar  usuario no body e 201', async () => {
    const userMock = {
      nome: 'Matheus Maciel Leão',
      cpf: '035.891.820-08',
      data_nascimento: '19/06/2000',
      email: 'matheusleao@gmail.com.com',
      senha: '123456',
      habilitado: 'não'
    };

    const response = await request(app).post('/api/v1/people/').send(userMock);

    const { status } = response;
    expect(status).toBe(201);
  });
});
