const app = require('./index');

const supertest = require('supertest');
const request = supertest(app);

describe('Todos API', () => {
	it('GET /api/todos --> array todos', async () => {
		const res = await request.get('/api/todos');

		expect(res.status).toBe(200);
	});

	it('Post /api/todos --> status 200', async () => {
		const data = {
			todo: 'test',
		};
		const res = await request.post('/api/todos').send(data);

		expect(res.status).toBe(200);
	});
});
