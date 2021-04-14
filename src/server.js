const http = require('http');

function createServer(config = {}) {
  const { buildNumber = '1' } = config;

  const server = http.createServer((req, res) => {
    console.log(`Received request ${req.method.toUpperCase()} ${req.url}`);
    res.writeHead(200, 'OK');
    res.write(Buffer.from(`Hello Crazy World! Build number ${buildNumber}\n`));
    res.end();
  });

  return server;
}

module.exports = createServer;
