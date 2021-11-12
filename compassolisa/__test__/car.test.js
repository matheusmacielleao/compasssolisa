const request = require('supertest');
const app = require('../src/app');
const CarroSchema = require('../src/app/schema/CarroSchema');
const PessoaSchema = require('../src/app/schema/PessoaSchema');

let BearerToken = null;

beforeAll(async () => {
  await CarroSchema.deleteMany();
  await PessoaSchema.deleteMany();

  const pessoaMock = {
    nome: 'Matheus Maciel Leão',
    cpf: '035.891.820-08',
    data_nascimento: '19/06/2000',
    email: 'matheusleao@gmail.com.com',
    senha: '123456',
    habilitado: 'não'
  };

  await request(app).post('/api/v1/people/').send(pessoaMock);

  const response = await request(app)
    .post('/api/v1/authenticate/')
    .send({ email: pessoaMock.email, senha: pessoaMock.senha });

  const { body } = response;
  BearerToken = body.token;
});

beforeEach(async () => {
  await CarroSchema.deleteMany();
});

describe('criar carro', () => {
  it('retornar carro no body e status 201', async () => {
    const carroMock = {
      modelo: 'Fusca',
      cor: 'Azul',
      ano: 2010,
      acessorios: [
        {
          descricao: 'Piloto Automatico'
        },
        {
          descricao: 'Trava Eletrica'
        }
      ],
      quantidadePassageiros: 10
    };

    const response = await request(app)
      .post('/api/v1/car/')
      .set('Authorization', `Bearer ${BearerToken}`)
      .send(carroMock);
    const { status } = response;
    const { body } = response;

    expect(body).toHaveProperty('_id');
    expect(body.modelo).toBe(carroMock.modelo);
    expect(body.cor).toBe(carroMock.cor);
    expect(body.ano).toBe(carroMock.ano);
    expect(body.acessorios[0].descricao).toBe(carroMock.acessorios[0].descricao);
    expect(body.acessorios[1].descricao).toBe(carroMock.acessorios[1].descricao);
    expect(body.quantidadePassageiros).toBe(carroMock.quantidadePassageiros);
    expect(status).toBe(201);
  });
});
