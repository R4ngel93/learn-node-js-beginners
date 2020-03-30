const HTTP = require('http');
const server = HTTP.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello from Node.js server');
    res.end();
  } else {
    res.write('Using some other domain');
    res.end();
  }
});

server.listen('3000');