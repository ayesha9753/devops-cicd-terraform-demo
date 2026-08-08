const request = require('supertest');
const app = require('./server');

describe('API Health & Tasks', () => {
  it('GET /health returns 200 and status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /tasks returns an array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /tasks creates a new task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test task');
  });

  it('POST /tasks without title returns 400', async () => {
    const res = await request(app).post('/tasks').send({});
    expect(res.statusCode).toBe(400);
  });
});
