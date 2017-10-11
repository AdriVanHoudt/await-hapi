const server = require('../index.js');

describe('awaitHapi', async () => {
  it('has a test', async () => {
    await server.initialize();

    const res = await server.inject('/');
    expect(res.statusCode).toEqual(200);
    expect(res.result).toEqual('Hello world');
  });
});
