const http = require('http');
http.createServer((req, res) => {
  res.write('OK');
  res.end();
}).listen(8080);
