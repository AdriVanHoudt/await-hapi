'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.route({
  method: 'GET',
  path: '/',
  handler: async () => {
    return 'Hello world';
  }
});

(async () => {
  if (!module.parent) {
    await server.start();
    console.log(`Server running at ${server.info}`);
  }
})();

module.exports = server;
