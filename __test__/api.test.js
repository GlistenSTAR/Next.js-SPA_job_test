import { createMocks } from 'node-mocks-http';
import handleFilters from '../pages/api/filters';

describe('/api/filters', () => {
  test('returns filters', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handleFilters(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});

describe('/api/jobs', () => {
  test('returns jobs', async () => {
    const data = {
      q: '',
      sorts: []
    }
    const { req, res } = createMocks({
      method: 'POST',
      body: JSON.stringify(data)
    });

    await handleFilters(req, res);
    expect(res._getStatusCode()).toBe(200);
  });
});