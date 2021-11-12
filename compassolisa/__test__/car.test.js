const request = require('supertest');
const app = require('../src/app');
const CarroSchema = require('../src/app/schema/CarroSchema');
const PessoaSchema = require('../src/app/schema/PessoaSchema');

let BearerToken = null;

beforeAll(async () => {
  await CarroSchema.deleteMany();
  await PessoaSchema.deleteMany();

  const pessoaMock = {
    nome: 'Denise Maria Maciel',
    cpf: '359.203.353-00',
    data_nascimento: '19/06/2000',
    email: 'denise@gmail.com.com',
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
  await PessoaSchema.deleteMany();
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

describe('listar todos os carros', () => {
  it('retornar status 200', async () => {
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

    await request(app).post('/api/v1/car/').set('Authorization', `Bearer ${BearerToken}`).send(carroMock);

    const response = await request(app).get('/api/v1/car/').set('Authorization', `Bearer ${BearerToken}`);
    const { body } = response;
    const { carros } = body;
    expect(carros).toHaveLength(1);
    expect(carros[0].modelo).toBe(carroMock.modelo);
    expect(carros[0].cor).toBe(carroMock.cor);
    expect(carros[0].ano).toBe(carroMock.ano);
    expect(carros[0].acessorios[0].descricao).toBe(carroMock.acessorios[0].descricao);
    expect(carros[0].acessorios[0].descricao).toBe(carroMock.acessorios[0].descricao);
    const { status } = response;
    expect(status).toBe(200);
  });
});

describe('listar carro por Id', () => {
  it('retornar status 200', async () => {
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

    const { text } = await request(app)
      .post('/api/v1/car/')
      .set('Authorization', `Bearer ${BearerToken}`)
      .send(carroMock);

    const { _id } = JSON.parse(text);

    const response = await request(app)
      .get(`/api/v1/car/${_id.toString()}`)
      .set('Authorization', `Bearer ${BearerToken}`);
    const { body } = response;
    expect(body.modelo).toBe(carroMock.modelo);
    expect(body.cor).toBe(carroMock.cor);
    expect(body.ano).toBe(carroMock.ano);
    expect(body.acessorios[0].descricao).toBe(carroMock.acessorios[0].descricao);
    expect(body.acessorios[1].descricao).toBe(carroMock.acessorios[1].descricao);
    expect(body.quantidadePassageiros).toBe(carroMock.quantidadePassageiros);
    const { status } = response;
    expect(status).toBe(200);
  });
});

describe('deletar carro', () => {
  it('retornar corpo em branco e status 204', async () => {
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

    const { text } = await request(app)
      .post('/api/v1/car/')
      .set('Authorization', `Bearer ${BearerToken}`)
      .send(carroMock);

    const { _id } = JSON.parse(text);

    const response = await request(app)
      .delete(`/api/v1/car/${_id.toString()}`)
      .set('Authorization', `Bearer ${BearerToken}`);
    const { body } = response;
    expect(body.modelo).toBeUndefined();
    expect(body.cor).toBeUndefined();
    expect(body.ano).toBeUndefined();
    expect(body.acessorios).toBeUndefined();
    expect(body.quantidadePassageiros).toBeUndefined();
    const { status } = response;
    expect(status).toBe(204);
  });
});
