const request = require('supertest');
const app = require('../src/app');
const LocadoraSchema = require('../src/app/schema/LocadoraSchema');

beforeAll(async () => {
  await LocadoraSchema.deleteMany();
});

beforeEach(async () => {
  await LocadoraSchema.deleteMany();
});

describe('criar locadora', () => {
  it('retornar codigo 200', async () => {
    const locadoraMock = {
      nome: 'Localiza',
      cnpj: '46.609.837/0001-33',
      atividades: 'aluguel de carros por todo o brasil',
      endereco: [
        {
          cep: '96205-380',
          number: 197,
          isFilial: false
        }
      ]
    };

    const response = await request(app).post('/api/v1/rental/').send(locadoraMock);
    const { body } = response;

    expect(body).toHaveProperty('_id');
    expect(body.nome).toBe(locadoraMock.nome);
    expect(body.cnpj).toBe(locadoraMock.cnpj);
    expect(body.atividades).toBe(locadoraMock.atividades);
    expect(body.endereco[0].cep).toBe(locadoraMock.endereco[0].cep);
    expect(body.endereco[0].number).toBe(locadoraMock.endereco[0].number);
    expect(body.endereco[0].logradouro).toBeDefined();
    expect(body.endereco[0].bairro).toBeDefined();
    expect(body.endereco[0].localidade).toBeDefined();
    expect(body.endereco[0].uf).toBeDefined();
    expect(body.endereco[0].isFilial).toBe(locadoraMock.endereco[0].isFilial);

    const { status } = response;
    expect(status).toBe(201);
  });
});

describe('listar locadoras', () => {
  it('retornar codigo 200', async () => {
    const locadoraMock = {
      nome: 'Localiza',
      cnpj: '46.609.837/0001-33',
      atividades: 'aluguel de carros por todo o brasil',
      endereco: [
        {
          cep: '96205-380',
          number: 197,
          isFilial: false
        }
      ]
    };
    await request(app).post('/api/v1/rental/').send(locadoraMock);
    const response = await request(app).get('/api/v1/rental/');
    const { body } = response;
    const { locadoras } = body;

    expect(locadoras).toHaveLength(1);
    expect(locadoras[0]).toHaveProperty('_id');
    expect(locadoras[0].nome).toBe(locadoraMock.nome);
    expect(locadoras[0].cnpj).toBe(locadoraMock.cnpj);
    expect(locadoras[0].atividades).toBe(locadoraMock.atividades);
    expect(locadoras[0].endereco[0].cep).toBe(locadoraMock.endereco[0].cep);
    expect(locadoras[0].endereco[0].number).toBe(locadoraMock.endereco[0].number);
    expect(locadoras[0].endereco[0].logradouro).toBeDefined();
    expect(locadoras[0].endereco[0].bairro).toBeDefined();
    expect(locadoras[0].endereco[0].localidade).toBeDefined();
    expect(locadoras[0].endereco[0].uf).toBeDefined();
    expect(locadoras[0].endereco[0].isFilial).toBe(locadoraMock.endereco[0].isFilial);

    const { status } = response;
    expect(status).toBe(200);
  });
});
describe('listar locadora por id', () => {
  it('retornar codigo 200', async () => {
    const locadoraMock = {
      nome: 'Localiza',
      cnpj: '46.609.837/0001-33',
      atividades: 'aluguel de carros por todo o brasil',
      endereco: [
        {
          cep: '96205-380',
          number: 197,
          isFilial: false
        }
      ]
    };
    const { text } = await request(app).post('/api/v1/rental/').send(locadoraMock);
    const { _id } = JSON.parse(text);

    const response = await request(app).get(`/api/v1/rental/${_id.toString()}`);

    const { body } = response;

    expect(body.nome).toBe(locadoraMock.nome);
    expect(body.cnpj).toBe(locadoraMock.cnpj);
    expect(body.atividades).toBe(locadoraMock.atividades);
    const { status } = response;
    expect(status).toBe(200);
  });
});

describe('deletar locadora', () => {
  it('retornar codigo 204', async () => {
    const locadoraMock = {
      nome: 'Localiza',
      cnpj: '46.609.837/0001-33',
      atividades: 'aluguel de carros por todo o brasil',
      endereco: [
        {
          cep: '96205-380',
          number: 197,
          isFilial: false
        }
      ]
    };
    const { text } = await request(app).post('/api/v1/rental/').send(locadoraMock);
    const { _id } = JSON.parse(text);

    const response = await request(app).delete(`/api/v1/people/${_id.toString()}`);

    const { body } = response;

    expect(body.nome).toBeUndefined();
    expect(body.cnpj).toBeUndefined();
    expect(body.atividades).toBeUndefined();
    expect(body.endereco).toBeUndefined();
    const { status } = response;
    expect(status).toBe(204);
  });
});
