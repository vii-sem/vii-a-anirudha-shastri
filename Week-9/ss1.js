/*jshint esversion:6*/
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let body = '';
  if (req.method === 'GET') {
    res.writeHead(200, {
      'content-Type': 'text/html'
    });
    fs.readFile('form.html', 'UTF-8', (err, data) => {
      if (err) throw err;
      res.write(data);
      console.log(data);
      res.end();
    });
  } else if (req.method === 'POST') {
    req.on('data', (data1) => {
      body += data1;
    });
    req.on('end', () => {
      res.writeHead(200, {
        'content-Type': 'text/html'
      });
      res.write(body, () => {
        res.end();
      });
    });
  } else {
    res.writeHead(404, {
      'content-Type': 'text/html'
    });
    res.end(`<h1>404 ERROR could not find that Page</h1>`);
  }
}).listen(1134);
console.log('Server is running');