const request = require('supertest');
const app = require('../../src/app');
const PessoaSchema = require('../../src/app/schema/PessoaSchema');

beforeAll(async () => {
  await PessoaSchema.deleteMany();
});

beforeEach(async () => {
  await PessoaSchema.deleteMany();
});

describe('criar Pessoa', () => {
  it('retornar Pessoa no body e status 201', async () => {
    const pessoaMock = {
      nome: 'Matheus Maciel Leão',
      cpf: '035.891.820-08',
      data_nascimento: '19/06/2000',
      email: 'matheusleao@gmail.com.com',
      senha: '123456',
      habilitado: 'não'
    };

    const response = await request(app).post('/api/v1/people/').send(pessoaMock);
    const { body } = response;

    expect(body).toHaveProperty('_id');
    expect(body.nome).toBe(pessoaMock.nome);
    expect(body.cpf).toBe(pessoaMock.cpf);
    expect(body.data_nascimento).toBe(pessoaMock.data_nascimento);
    expect(body.email).toBe(pessoaMock.email);
    expect(body.habilitado).toBe(pessoaMock.habilitado);
    const { status } = response;
    expect(status).toBe(201);
  });
});

describe('listar todas as pessoas', () => {
  it('retornar status 200', async () => {
    const pessoaMock = {
      nome: 'Matheus Maciel Leão',
      cpf: '035.891.820-08',
      data_nascimento: '19/06/2000',
      email: 'matheusleao@gmail.com.com',
      senha: '123456',
      habilitado: 'não'
    };

    await request(app).post('/api/v1/people/').send(pessoaMock);

    const response = await request(app).get('/api/v1/people/');
    const { body } = response;
    const { pessoas } = body;
    expect(pessoas[0].nome).toBe(pessoaMock.nome);
    expect(pessoas[0].cpf).toBe(pessoaMock.cpf);
    expect(pessoas[0].data_nascimento).toBe(pessoaMock.data_nascimento);
    expect(pessoas[0].email).toBe(pessoaMock.email);
    expect(pessoas[0].habilitado).toBe(pessoaMock.habilitado);
    const { status } = response;
    expect(status).toBe(200);
  });
});

describe('listar Usuario por Id', () => {
  it('retornar status 200', async () => {
    const pessoaMock = {
      nome: 'Matheus Maciel Leão',
      cpf: '035.891.820-08',
      data_nascimento: '19/06/2000',
      email: 'matheusleao@gmail.com.com',
      senha: '123456',
      habilitado: 'não'
    };

    const { text } = await request(app).post('/api/v1/people/').send(pessoaMock);

    const { _id } = JSON.parse(text);

    const response = await request(app).get(`/api/v1/people/${_id.toString()}`);
    const { body } = response;
    expect(body.nome).toBe(pessoaMock.nome);
    expect(body.cpf).toBe(pessoaMock.cpf);
    expect(body.data_nascimento).toBe(pessoaMock.data_nascimento);
    expect(body.email).toBe(pessoaMock.email);
    expect(body.habilitado).toBe(pessoaMock.habilitado);
    const { status } = response;
    expect(status).toBe(200);
  });
});

describe('deletar usuario', () => {
  it('retornar corpo em branco e status 204', async () => {
    const pessoaMock = {
      nome: 'Matheus Maciel Leão',
      cpf: '035.891.820-08',
      data_nascimento: '19/06/2000',
      email: 'matheusleao@gmail.com.com',
      senha: '123456',
      habilitado: 'não'
    };

    const { text } = await request(app).post('/api/v1/people/').send(pessoaMock);

    const { _id } = JSON.parse(text);

    const response = await request(app).delete(`/api/v1/people/${_id.toString()}`);

    const { body } = response;

    expect(body.nome).toBeUndefined();
    expect(body.cpf).toBeUndefined();
    expect(body.data_nascimento).toBeUndefined();
    expect(body.email).toBeUndefined();
    expect(body.habilitado).toBeUndefined();

    const { status } = response;
    expect(status).toBe(204);
  });
});
